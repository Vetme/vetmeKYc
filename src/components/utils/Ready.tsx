import React from "react";
import styled from "styled-components";
import { Spacer, Text } from "..";

const Wrapper = styled.div`
  max-width: 100%;
  width: 990px;
  background: #170728;
  border: 1px solid #453953;
  border-radius: 12px;
  padding: 55px;
  margin: auto;
  color: #fff;
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 49.601px;
    line-height: 63px;
  }

  @media (max-width: 640px) {
    max-width: 95%;
    padding: 20px;

    h2 {
      font-weight: 700;
      font-size: 28.601px;
      line-height: 40px;
    }
  }
`;

const Button = styled.button`
  background: #ffffff;
  height: 36.89px;
  text-align: center;
  text-transform: uppercase;
  padding: 0px 58px;
  border: 0.955999px solid #000000;
  border-radius: 11.7374px;

  color: #000000;

  &.primary {
    transition: 0.4s;
    background: #befecd;

    &:hover {
      background: #8be9a1;
    }
  }

  @media (max-width: 640px) {
    padding: 0px 20px;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReadyKyc = ({ onClick }: { onClick: () => void }) => {
  return (
    <Wrapper>
      <h2>Are you ready to start your KYC?</h2>
      <Text className="mt-3 mb-6">Get in touch or create an account.</Text>

      <Action>
        <Button onClick={onClick} className="primary">
          Login in
        </Button>
        <Spacer width={30} />
        <Button onClick={onClick}>Contact </Button>
      </Action>
    </Wrapper>
  );
};

export default ReadyKyc;
