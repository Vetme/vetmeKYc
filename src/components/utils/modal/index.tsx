import React, { ReactNode } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import { Spacer } from "../..";
import { Close } from "../../icons";
interface ModalI {
  open: boolean;
  close: () => void;
  children: ReactNode;
}

const overlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      //   delay: 1,
    },
  },
};

const container = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {},
  },
};

const content = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      delay: 0.6,
    },
  },
};

const button = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

const Container = styled.div`
  position: fixed;
  width: 400px;
  height: 256px;
  max-width: 95%;
  background: #fff;
  inset: 0;
  padding: 40px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #170728;
  border-radius: 20px;
  flex-direction: column;
  z-index: 999;
`;
const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
`;

const Header = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Modal = ({ open, close, children }: ModalI) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <Overlay
            onClick={() => close()}
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            as={motion.div}
          />
          <Container
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            as={motion.div}
          >
            <Header onClick={() => close()}>
              <Close />
            </Header>
            {children}
          </Container>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
