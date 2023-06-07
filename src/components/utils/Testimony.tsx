import React, { FC } from "react";
import styled from "styled-components";
import { Flex, Spacer, Text } from "..";
import { Check } from "../icons";

interface PriceI {
  price: {
    title: string;
    price: number;
    desc: string;
    duration: string;
    options: string[];
    color?: string;
  };
}

const Wrapper = styled.div`
  width: 990px;
  max-width: 90%;
  background-color: #eff1ea;
  padding: 46px 46px;
  border: 1px solid #453953;
  border-radius: 12px;
  margin: auto;
  position: relative;
  transform-style: preserve-3d;
  /* z-index: 10; */

  @media (max-width: 640px) {
    padding: 20px;
  }

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #453953;
    border-radius: 12px;
    /* z-index: -1; */
    top: 10px;
    left: -10px;
    transform: translateZ(-1px);
  }
`;

const Inner = styled.div``;
const Avatar = styled.div`
  flex-shrink: 0;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (max-width: 640px) {
    height: 60px;
    width: 60px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
`;

const Controls = styled.div``;
const Right = styled.div`
  position: absolute;
  width: 54px;
  height: 54px;
  right: -27px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100px;

  background: #170728;
  box-shadow: 0px 21.6px 18px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    right: -20px;
    box-shadow: 0px 11.6px 9px rgba(0, 0, 0, 0.15);
  }
`;

const Testimony = () => {
  return (
    <Wrapper>
      <Inner>
        <Flex align="center">
          <Avatar className="mr-4 sm:mr-8">
            <img src="/images/user.jpeg" alt="User" />
          </Avatar>
          <Text>Compliance advantage with AML check</Text>
        </Flex>
        <Spacer height={40} heightM={20} />
        <Text>
          "Our platform offers unparalleled accuracy, enhanced security, and
          scalability to meet the evolving needs of your business. With AML
          check, we prioritize data privacy and ensure that your sensitive
          information remains confidential at all times." VetMe Founder.
        </Text>
      </Inner>

      <Controls>
        <Right>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.8558 25.2117C8.99514 25.3514 9.16066 25.4622 9.3429 25.5378C9.52514 25.6134 9.7205 25.6523 9.9178 25.6523C10.1151 25.6523 10.3105 25.6134 10.4927 25.5378C10.6749 25.4622 10.8405 25.3514 10.9798 25.2117L20.9518 15.2397C21.063 15.1286 21.1513 14.9968 21.2115 14.8516C21.2717 14.7064 21.3027 14.5508 21.3027 14.3937C21.3027 14.2365 21.2717 14.0809 21.2115 13.9357C21.1513 13.7905 21.063 13.6587 20.9518 13.5477L10.9798 3.57566C10.3918 2.98766 9.4438 2.98766 8.8558 3.57566C8.2678 4.16366 8.2678 5.11166 8.8558 5.69966L17.5438 14.3997L8.8438 23.0997C8.2678 23.6757 8.2678 24.6357 8.8558 25.2117Z"
              fill="white"
            />
          </svg>
        </Right>
      </Controls>
    </Wrapper>
  );
};

export default Testimony;
