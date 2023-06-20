import React, { FC } from "react";
import styled from "styled-components";
import { Flex, Text } from "..";
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

const Wrapper = styled.div<{ bg?: string }>`
  width: 403px;
  max-width: 100%;
  background: ${({ bg }) => bg || "#fff"};
  padding: 46px 46px;
  border: 0.913319px solid #170728;
  border-radius: 29.2262px;
  cursor: pointer;
`;

const PriceWrapper = styled.div`
  position: relative;
  .duration {
    position: absolute;
    bottom: 0px;
    right: 12px;
    font-size: 24px;
  }
`;
const Inner = styled.div``;
const Price = styled.div`
  font-size: 100.81px;
  color: #170728;
  line-height: 165px;
  text-transform: uppercase;

  @media (max-width: 640px) {
    font-size: 68px;
    line-height: 130px;
  }
`;
const Type = styled.div`
  padding: 10px 20px;
  background: #000000;
  border-radius: 40px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin: auto;
  display: inline-block;
`;
const Options = styled.div``;

const Desc = styled.div`
  margin: 0px 0px;
`;

const PricingCard: FC<PriceI> = ({ price }) => {
  return (
    <Wrapper bg={price.color}>
      <Inner>
        <Flex justify="center">
          <Type>{price.title}</Type>
        </Flex>
        <PriceWrapper>
          <Price>${price.price}</Price>
          {/* <Text className="duration">/{price.duration}</Text> */}
        </PriceWrapper>

        <Desc>
          <Text>{price.desc}</Text>
        </Desc>

        <Options>
          {price.options.map((option, i) => (
            <Flex className="py-4" gap={18} align="center" key={i}>
              <Check />
              <Text>{option}</Text>
            </Flex>
          ))}
        </Options>
      </Inner>
    </Wrapper>
  );
};

export default PricingCard;
