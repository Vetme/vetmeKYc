import styled from "styled-components";

export const Hero = styled.div`
  padding: 160px 0px 50px 0px;

  @media (max-width: 640px) {
    padding: 120px 0px 50px 0px;
  }
`;
export const HDetails = styled.div`
  padding-top: 20px;
`;
export const HArt = styled.div`
  @media (max-width: 640px) {
    svg {
      width: 100%;
      height: 301px;
      margin-top: 60px;
    }
  }
`;
export const ComAiSection = styled.div`
  background: #eff1ea;
  padding: 100px 0px;
  border-top: 1px solid #453953;
  border-bottom: 1px solid #453953;

  @media (max-width: 640px) {
    padding: 50px 0px 0px 0px;
  }
`;
export const CDisplay = styled.div`
  @media (max-width: 640px) {
    svg {
      width: 100%;
    }
  }
`;
export const CDetails = styled.div``;
export const CInner = styled.div``;

export const PricingSection = styled.div`
  background: #170728;
  padding: 100px 0px;
  border-top: 1px solid #453953;
  border-bottom: 1px solid #453953;
  /* position: sticky; */
  top: 0px;

  &.page {
    background: #fff;
    padding: 150px 0px;
    border: 1px solid transparent;
  }

  @media (max-width: 640px) {
    /* display: none; */
    padding: 50px 0px;
  }
`;

export const ServiceSection = styled.div`
  background: #fff;
  padding: 100px 0px;
  position: relative;
  @media (max-width: 640px) {
    padding: 50px 0px;
  }
`;
export const TestimonySection = styled.div`
  background: #fff;
  padding: 20px 0px;
  position: relative;

  @media (max-width: 640px) {
    padding: 20px 0px;
  }
`;

export const PlatformSection = styled.div`
  background: #fff;
  padding: 100px 0px;
  position: relative;

  @media (max-width: 640px) {
    padding: 50px 0px;
  }
`;

export const PlatformInner = styled.div`
  width: 990px;
  margin: auto;
  background: url(/images/platform.png);
  background-size: 100% 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    background: #fff;

    /* &:first-child {
      flex-direction: column-reverse;
    } */
  }
`;

export const PlatformDetails = styled.div`
  margin-top: 40px;
  height: 500px;

  &:first-child {
    padding: 80px 30px;
    margin: 10px;

    @media (max-width: 640px) {
      padding: 0px 0px;
    }
  }

  &:last-child {
    padding: 50px 30px;
    margin-left: 80px;

    @media (max-width: 640px) {
      padding: 0px 0px;
      margin-left: 0px;
    }
  }

  @media (max-width: 640px) {
    height: auto;
  }
`;
export const PlatformDisplay = styled.div`
  &.first {
    margin-top: 70px;
    margin-left: 30px;
  }

  &.last {
    margin-top: 70px;
    margin-left: 30px;
  }
`;

export const PInner = styled.div``;

export const ReadySection = styled.div`
  padding-bottom: 100px;
          <Spacer height={50} width={20} />
  @media (max-width: 640px) {
    /* display: none; */
  }
`;
