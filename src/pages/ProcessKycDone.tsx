import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { Heart } from "../components/icons";
import { Flex } from "../components";

const Wrapper = styled.div`
  max-width: 100%;
  width: 640px;
  margin: auto;
  padding: 10px;
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 32px;
    margin: 20px 0px;
  }

  svg {
    margin: auto;
    height: 100px;
    width: 100px;
    fill: #f44336;
  }
`;

const ProcessKyc = () => {
  return (
    <Flex align="center" justify="center">
      <Wrapper>
        <Heart />
        <h2>Thank you</h2>
        <p>
          Your verification has been received. You will be able to download
          generate you certificate after 24 hour
        </p>
      </Wrapper>
    </Flex>
  );
};

export default ProcessKyc;
