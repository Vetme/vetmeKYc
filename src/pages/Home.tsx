import React, { useMemo } from "react";
import HomeLayout from "../components/layout/HomeLayout";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Link } from "react-router-dom";
import {
  Hero,
  HDetails,
  HArt,
  CDisplay,
  ComAiSection,
  CDetails,
  PricingSection,
  CInner,
  PInner,
  ServiceSection,
  TestimonySection,
  PlatformInner,
  PlatformSection,
  PlatformDetails,
  PlatformDisplay,
  ReadySection,
} from "./styles";
import { Flex, Spacer, Text } from "../components";
import { CaretRight, HeroArt, Kyc, PointH, Simple } from "../components/icons";
import PricingCard from "../components/utils/Pricing";
import ServiceArea from "../components/utils/ServiceArea";
import Testimony from "../components/utils/Testimony";
import ReadyKyc from "../components/utils/Ready";
import LayeredBtn from "../components/utils/LayeredBtn";

const Home = () => {
  const prices = useMemo(() => {
    return [
      {
        title: "Regular",
        price: 500,
        duration: "Monthly",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        options: [
          "Personal Information KYC",
          "Identification KYC",
          "Geo-location KYC",
          "Personal Information KYC",
        ],
      },

      {
        title: "Regular",
        price: 500,
        duration: "Monthly",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        options: [
          "Personal Information KYC",
          "Identification KYC",
          "Geo-location KYC",
          "Personal Information KYC",
        ],
        color: "#BEFECD",
      },
    ];
  }, []);

  const services = useMemo(() => {
    return [
      {
        title: "Telecoms",
        imageUri: "/images/tel.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
        direction: "left",
      },
      {
        title: "Marketplace",
        imageUri: "/images/market.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
        direction: "center",
      },
      {
        title: "Financial Services",
        imageUri: "/images/finance.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
        direction: "right",
      },
      {
        title: "E-commerce",
        imageUri: "/images/e-commerce.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
        direction: "left",
      },
      {
        title: "Crypto",
        imageUri: "/images/crypto.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
        direction: "center",
      },
      {
        title: "Transport",
        imageUri: "/images/transport.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu",
        direction: "right",
      },
    ];
  }, []);

  return (
    <HomeLayout>
      {/* Hero Section */}
      <Hero id="solutions">
        <div className="container">
          <div className="wrapper">
            <Flex directionM="column">
              <HDetails className="flex-1 sm:w-1/2 w-full">
                <h2 className="sm:text-[52px] sm:leading-[67px] text-[42px] leading-[50px]">
                  An Indefinite <br />
                  Compliance System
                </h2>
                <Spacer height={23} />
                <Text>
                  Our company is an innovative, plan-centric platform that meets
                  the Anti-Money Laundering and Know Your Customer (KYC)
                  compliance needs of small and large business.
                </Text>
                <Spacer height={50} />
                <Flex>
                  <LayeredBtn
                    lDir="right"
                    bgColor="#BEFECD"
                    width="147px"
                    height="46px"
                  >
                    <span className="text-[#170728] text-[0.87em]">Login</span>
                  </LayeredBtn>
                  <Spacer width={24} />
                  <LayeredBtn
                    lDir="right"
                    bgColor="#FBF2FF"
                    width="147px"
                    height="46px"
                  >
                    <span className="text-[#170728] text-[0.87em]">
                      Contact
                    </span>
                  </LayeredBtn>
                </Flex>
              </HDetails>
              <HArt className="flex-1 sm:w-1/2 w-full">
                <HeroArt />
              </HArt>
            </Flex>
          </div>
        </div>
      </Hero>

      {/* Company Ai Section */}

      <ComAiSection id="kyc">
        <CInner className="container">
          <div className="wrapper">
            <Flex directionM="column-reverse" wrap justify="space-between">
              <CDisplay>
                <Kyc />
              </CDisplay>
              <CDetails className="w-full sm:w-1/2">
                <PointH />
                <Spacer height={34} />
                <h3 className="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[61px]">
                  The complete KYC <br /> site for your business.
                </h3>
                <Spacer height={15} />
                <Text as="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                </Text>
                <Spacer height={34} />

                <Flex as="a" href="" align="center">
                  <span className="mr-5">Learn More</span>
                  <CaretRight />
                </Flex>
              </CDetails>
            </Flex>
            <Spacer height={100} heightM={30} />

            <Flex wrap justify="space-between">
              <CDetails className="w-full sm:w-1/2">
                <PointH />
                <Spacer height={34} />
                <h3 className="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[61px]">
                  Simple and <br /> Powerful AI.
                </h3>
                <Spacer height={15} />

                <Text as="p">
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Etiam eu ipsum dolor sit amet, consectetur
                  adipiscing elit. Etiam eu
                </Text>
                <Spacer height={34} />

                <Flex as="a" href="" align="center">
                  <span className="mr-5">Learn More</span>
                  <CaretRight />
                </Flex>
              </CDetails>
              <CDisplay>
                <Simple />
              </CDisplay>
            </Flex>
          </div>
        </CInner>
      </ComAiSection>

      {/* Pricing Section */}

      <PricingSection id="pricing">
        <div className="container m-auto">
          <PInner>
            <Flex wrap justify="center" gap={40}>
              {prices.map((price, i) => (
                <PricingCard price={price} key={i} />
              ))}
            </Flex>
          </PInner>
        </div>
      </PricingSection>

      {/* Service section  */}

      <ServiceSection>
        <div className="container m-auto">
          <div className="wrapper">
            <div className="text-center w-[743px] max-w-full m-auto">
              <h2 className="text-[32px] leading-[40px] sm:text-[52px] sm:leading-[67px]  mb-4">
                Our Company covers
              </h2>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu{" "}
              </Text>
            </div>

            <div className="">
              <div className="grid grid-cols-1  sm:grid-cols-3 justify-items-center">
                {services.map((service, i) => (
                  <ServiceArea service={service} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ServiceSection>

      {/* Testimony */}

      <TestimonySection>
        <div className="container m-auto">
          <div className="wrapper">
            <Testimony />
          </div>
        </div>
      </TestimonySection>

      {/* Platform */}

      <PlatformSection>
        <div className="container m-auto">
          <div className="wrapper">
            <PlatformInner>
              <PlatformDetails>
                <h2 className="text-[32px] leading-[40px] sm:text-[52px] sm:leading-[67px]">
                  Cost Effective <br />
                  Platform
                </h2>
                <Spacer height={23} />

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                </Text>
              </PlatformDetails>
              <PlatformDisplay className="first">
                <img src="/images/Political_corruption.png" alt="" />
              </PlatformDisplay>
              <PlatformDisplay className="last">
                <img src="/images/Stay_connected_to_people.png" alt="" />
              </PlatformDisplay>
              <PlatformDetails>
                <h2 className="text-[32px] leading-[40px] sm:text-[52px] sm:leading-[67px]">
                  User-friendly <br /> Platform
                </h2>
                <Spacer height={23} />

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                </Text>
              </PlatformDetails>
            </PlatformInner>
          </div>
        </div>
      </PlatformSection>

      {/* Ready section */}

      <ReadySection>
        <ReadyKyc />
      </ReadySection>
    </HomeLayout>
  );
};

export default Home;
