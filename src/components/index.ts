import styled from "styled-components";

export const Text = styled.span<{
  weight?: string;
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "big"
    | "normal"
    | "small"
    | "tiny"
    | "s1"
    | "s2"
    | "s3"
    | "s4";
  color?: string;
  sizeM?: string;
  padding?: string;
  uppercase?: boolean;
}>`
  display: block;
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  font-size: ${({ size }) =>
    size == "h1"
      ? "56px"
      : size == "h2"
      ? "40px"
      : size == "h3"
      ? "26px"
      : size == "h4"
      ? "18px"
      : size == "h5"
      ? "14px"
      : size == "big"
      ? "20px"
      : size == "normal"
      ? "18px"
      : size == "small"
      ? "16px"
      : size == "tiny"
      ? "14px"
      : size == "s1"
      ? "18px"
      : size == "s2"
      ? "16px"
      : size == "s3"
      ? "14px"
      : size == "s4"
      ? "14px"
      : "18px"};
  line-height: 150%;
  color: ${({ color }) => color};

  letter-spacing: 0.02em;
  text-transform: ${({ uppercase }) => uppercase && "Uppercase"};

  &.fancy {
    background: linear-gradient(302.59deg, #a93ceb -21.04%, #6a64ff 124.16%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media (max-width: 640px) {
    font-size: ${({ sizeM }) =>
      sizeM == "h1"
        ? "56px"
        : sizeM == "h2"
        ? "40px"
        : sizeM == "h3"
        ? "26px"
        : sizeM == "h4"
        ? "18px"
        : sizeM == "h5"
        ? "14px"
        : sizeM == "big"
        ? "20px"
        : sizeM == "normal"
        ? "18px"
        : sizeM == "small"
        ? "16px"
        : sizeM == "tiny"
        ? "14px"
        : sizeM == "tiny-2"
        ? "10px"
        : sizeM == "s1"
        ? "18px"
        : sizeM == "s2"
        ? "16px"
        : sizeM == "s3"
        ? "14px"
        : sizeM == "s4"
        ? "14px"
        : "14px"};
  }
`;

export const Flex = styled.div<{
  direction?: "row" | "column";
  align?: string;
  gap?: number;
  justify?:
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "center"
    | "flex-end";
  directionM?: string;
  margin?: string;
  wrap?: boolean;
  expand?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  width: ${({ expand }) => expand && "100%"};
  gap: ${({ gap }) => gap + "px"};

  &.home-p {
    @media (max-width: 640px) {
      padding: 10px 0px;
      margin: 0px 24px;
    }
  }
  @media (max-width: 640px) {
    flex-direction: ${({ directionM }) => directionM && directionM};

    &.grid {
      justify-content: center;
    }
  }
`;

export const Spacer = styled.div<{
  height?: number;
  width?: number;
  heightM?: number;
  widthM?: number;
}>`
  height: 10px;
  height: ${({ height }) => height && height + "px"};
  width: 0px;
  width: ${({ width }) => width && width + "px"};
  flex-shrink: 0;

  @media (max-width: 640px) {
    height: ${({ heightM }) => heightM && heightM + "px"};
    width: ${({ widthM }) => widthM && widthM + "px"};
  }
`;
