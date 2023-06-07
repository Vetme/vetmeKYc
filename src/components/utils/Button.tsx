import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contain = styled.button`
  height: 39px;
  line-height: 34px;
  padding: 0px 37px;
  background: #fff;
  border-radius: 100px;
  border: 1px solid #000000;
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  margin: 8px;
  &.dark {
    background: #000000;
    border: 1px solid #170728;
    color: #fff;
  }

  @media (max-width: 640px) {
    padding: 0px 24px;
  }
`;

interface BtnI {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  to?: string;
  onClick?: () => void;
  classNames?: string;
}

const Button: FC<BtnI> = ({ to, text, classNames, onClick }) => {
  return (
    <>
      {to ? (
        <Contain className={classNames} as={Link} to={to}>
          {" "}
          {text}
        </Contain>
      ) : (
        <Contain onClick={onClick} className={classNames}>
          {text}
        </Contain>
      )}
    </>
  );
};

export default Button;
