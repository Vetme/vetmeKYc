import React, { FC } from "react";
import styled from "styled-components";
import { Flex, Text } from "..";
import { Check } from "../icons";

interface PriceI {
  service: {
    title: string;
    desc: string;
    imageUri: string;
    direction: string;
  };
}

const Wrapper = styled.div`
  width: 216px;
  margin: 150px 0px 0px 0px;
  background: #fff;
  position: relative;

  @media (max-width: 640px) {
    margin: 130px 0px 0px 0px;
    width: auto;
  }
`;

const Inner = styled.div``;
const Display = styled.div<{ direction?: string }>`
  border: ${({ direction }) =>
    direction == "center" ? " 1px solid #5d5169" : " 1px solid transparent"};
  border-radius: 11px;
  height: 216px;
  width: 216px;
  padding: 16px;
  position: relative;

  ${({ direction }) =>
    direction == "left" &&
    `
    @media (max-width:640px){
          left: 108px;
    }
    &:after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    background: black;
    left: -60px;
    border-radius: 100px;
    top: -60px;

    
  }
  `}

  ${({ direction }) =>
    direction == "right" &&
    `
    &:after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    background: black;
    right: -60px;
    border-radius: 100px;
    top: -60px;
  }
  `}

  svg {
    position: absolute;

    &.right {
      left: 0px;
      top: -96px;
    }

    &.left {
      right: 0px;
      top: -96px;
    }
  }

  img.display {
    border-radius: 11px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ServiceArea: FC<PriceI> = ({ service }) => {
  return (
    <Wrapper>
      <Inner>
        <Display direction={service.direction}>
          {service.direction == "left" && (
            <svg
              className="left"
              width="307"
              height="311"
              viewBox="0 0 307 311"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.665 310.5H297.415C302.352 310.5 306.353 306.498 306.353 301.562V104.811C306.353 99.875 302.352 95.8733 297.415 95.8733H123.165C118.513 95.8733 114.052 94.0253 110.762 90.7358L95.8642 75.838C92.5747 72.5485 90.7267 68.087 90.7267 63.4349V9.43784C90.7267 4.50162 86.7251 0.5 81.7888 0.5H9.43784C4.50161 0.5 0.5 4.50162 0.5 9.43787V85.9355C0.5 90.8717 4.5016 94.8733 9.43783 94.8733H64.5158C68.4988 94.8733 72.3632 96.2289 75.4733 98.717L85.1436 106.453C89.3045 109.782 91.7267 114.822 91.7267 120.15V301.562C91.7267 306.498 95.7283 310.5 100.665 310.5Z"
                stroke="#5D5169"
              />
            </svg>
          )}

          {service.direction == "right" && (
            <svg
              className="right"
              width="308"
              height="311"
              viewBox="0 0 308 311"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M215.833 301.562C215.833 306.498 211.831 310.5 206.895 310.5H10.1441C5.20786 310.5 1.20624 306.498 1.20624 301.562V104.811C1.20624 99.8749 5.20786 95.8733 10.1441 95.8733H184.394C189.047 95.8733 193.508 94.0253 196.798 90.7358L211.695 75.838C214.985 72.5485 216.833 68.087 216.833 63.4349V9.43784C216.833 4.50162 220.835 0.5 225.771 0.5H298.122C303.058 0.5 307.06 4.50162 307.06 9.43787V85.9355C307.06 90.8717 303.058 94.8733 298.122 94.8733H243.044C239.061 94.8733 235.196 96.2289 232.086 98.717L222.416 106.453C218.255 109.782 215.833 114.822 215.833 120.15V301.562Z"
                stroke="#5D5169"
              />
            </svg>
          )}

          <img className="display" src={service.imageUri} alt={service.title} />
        </Display>
        <Text className="text-2xl mt-7 mb-4" weight="700" as="h4">
          {service.title}
        </Text>
        <Text as="p">{service.desc}</Text>
      </Inner>
    </Wrapper>
  );
};

export default ServiceArea;
