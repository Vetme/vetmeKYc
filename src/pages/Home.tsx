import React, { useMemo, useState } from "react";
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
import PopUp from "../components/utils/modal/Popup";

const Home = () => {
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  const prices = useMemo(() => {
    return [
      {
        title: "Regular",
        price: 500,
        duration: "",
        desc: "Automate your KYC process and eliminate the need for manual verification, reducing operational costs and accelerating customer onboarding. ",
        options: [
          "Personal Information KYC",
          "Identification KYC",
          "Geo-location KYC",
          "Personal Information KYC",
          "Transferable Data.",
        ],
      },

      {
        title: "Premium",
        price: 1000,
        duration: "",
        desc: "Automate your KYC process and eliminate the need for manual verification, reducing operational costs and accelerating customer onboarding. ",
        options: [
          "Personal Information KYC",
          "Identification KYC",
          "Geo-location KYC",
          "Personal Information KYC",
          "Transferable Data.",
          "Up to 4 team members.",
          "Suitable for businesses",
        ],
        color: "#BEFECD",
      },
    ];
  }, []);

  const services = useMemo(() => {
    return [
      {
        title: "Financial Institutions:",
        imageUri: "/images/finance.png",
        desc: "Banks, credit unions, and other financial institutions operate in a heavily regulated environment. Our KYC service helps these organizations meet regulatory obligations by automating identity verification, document authentication, and risk assessment. By leveraging our AI-powered solution, financial institutions can enhance customer onboarding processes, improve efficiency, and mitigate the risks associated with financial transactions.",
        direction: "left",
      },
      {
        title: "Cryptocurrency Exchanges:",
        imageUri: "/images/crypto.png",
        desc: "The decentralized and pseudonymous nature of cryptocurrencies presents unique challenges for exchanges. VetMe KYC empowers cryptocurrency exchanges to implement robust KYC processes to authenticate user identities and comply with AML regulations. By leveraging our AI-driven KYC solution, cryptocurrency exchanges can prevent fraud, money laundering, and other illicit activities, while building trust with their user base.",
        direction: "center",
      },
      {
        title: "Online Marketplaces:",
        imageUri: "/images/market.png",
        desc: "In the fast-paced world of online marketplaces, trust and security are paramount. VetMe KYC offers a solution that verifies the identities of buyers and sellers, ensuring the integrity of transactions. By integrating our KYC service into their platforms, online marketplaces can enhance trust, reduce fraudulent activities, and foster a safe environment for users to engage in buying and selling.",
        direction: "right",
      },
      {
        title: "Insurance Providers:",
        imageUri: "/images/IMG_7844.JPG",
        desc: "Insurance companies require accurate customer data to assess risks and prevent insurance fraud. VetMe KYC assists insurance providers in verifying customer identities, validating documents, and conducting risk assessments. By implementing our KYC service, insurance companies can make informed underwriting decisions, improve operational efficiency, and minimize the potential for fraudulent claims.",
        direction: "left",
      },
      {
        title: "Fintech Companies:",
        imageUri: "/images/IMG_7845.JPG",
        desc: "As fintech companies continue to revolutionize the financial services landscape, complying with KYC and AML regulations becomes paramount. VetMe KYC offers fintech businesses a comprehensive solution to verify customer identities, conduct risk assessments, and ensure compliance. Our advanced AI algorithms streamline the onboarding process, enabling fintech firms to deliver seamless and secure user experiences while maintaining regulatory compliance.",
        direction: "center",
      },
      {
        title: "Real Estate Agencies:",
        imageUri: "/images/IMG_7848.JPG",
        desc: "Real estate transactions involve substantial investments and legal complexities. VetMe KYC helps real estate agencies mitigate risks by verifying the identities of buyers, sellers, landlords, and tenants. Our KYC service enhances transparency, prevents fraudulent activities, and instills confidence among all parties involved in property sales, rentals, and leases.",
        direction: "right",
      },
      {
        title: "Gaming and Gambling Platforms:",
        imageUri: "/images/IMG_7850.JPG",
        desc: "The online gaming and gambling industry must maintain high standards of integrity and compliance. VetMe KYC assists gaming and gambling platforms in verifying the age and identities of their users, ensuring responsible gaming practices, and preventing underage participation. By implementing our KYC solution, these platforms can maintain regulatory compliance, foster a secure environment, and protect their reputation.",
        direction: "left",
      },
      {
        title: "Crowdfunding Platforms:",
        imageUri: "/images/IMG_7852.JPG",
        desc: "Crowdfunding has gained popularity as an alternative means of raising funds for innovative projects. VetMe KYC provides crowdfunding platforms with robust KYC procedures to verify the identities of fundraisers and investors. Our solution helps platforms maintain the trust of participants, prevent fraudulent campaigns, and ensure compliance with regulatory frameworks.",
        direction: "center",
      },
      {
        title: "Peer-to-Peer Lending Platforms:",
        imageUri: "/images/IMG_7854.JPG",
        desc: "Peer-to-peer lending platforms connect borrowers directly with lenders, revolutionizing the lending landscape. VetMe KYC offers these platforms a reliable and efficient solution for verifying borrower identities, assessing creditworthiness, and facilitating secure lending transactions. By integrating our KYC service, peer-to-peer lending platforms can enhance risk management, minimize default rates, and protect lenders' interests.",
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
                  Unlocking the Future of KYC <br />
                  with VetMe
                </h2>
                <Spacer height={23} />
                <Text>
                  Experience the power of artificial intelligence and the
                  security of decentralized technology with VetMe KYC.
                </Text>
                <Spacer height={50} />
                <Flex>
                  <LayeredBtn
                    lDir="right"
                    bgColor="#BEFECD"
                    width="147px"
                    parentClassNames="w-auto"
                    height="46px"
                  >
                    <span
                      onClick={() => setOpenInfo(true)}
                      className="text-[#170728] text-[0.87em]"
                    >
                      Login
                    </span>
                  </LayeredBtn>
                  <Spacer width={24} />
                  <LayeredBtn
                    lDir="right"
                    bgColor="#FBF2FF"
                    width="147px"
                    height="46px"
                    parentClassNames="w-auto"
                  >
                    <span
                      onClick={() => setOpenInfo(true)}
                      className="text-[#170728] text-[0.87em]"
                    >
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
                  Robust Security <br />.
                </h3>
                <Spacer height={15} />
                <Text as="p">
                  Trust in our state-of-the-art encryption techniques and strict
                  access controls to protect your data from unauthorized access
                  and breaches.
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
                  AI powerful and <br /> Enhanced Accuracy.
                </h3>
                <Spacer height={15} />

                <Text as="p">
                  achieve higher accuracy rates in identity verification,
                  minimizing the risk of fraudulent activities.
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
                Industry we serve
              </h2>
              <Text>
                Our KYC solutions are tailored to meet the needs of various
                sectors, ensuring seamless integration and regulatory
                compliance. Here are some industries that can benefit from our
                advanced KYC service.
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

      <TestimonySection id="developers">
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
                  Time and Cost Savings <br />
                </h2>
                <Spacer height={23} />

                <Text>
                  Streamline your KYC process with automation, eliminating the
                  necessity for manual verification. This will result in reduced
                  operational expenses and expedited customer onboarding.
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
                  Our Service
                </h2>
                <Spacer height={23} />

                <Text>
                  Seamless Onboarding, Enhanced Security: With VetMe KYC, you
                  can say goodbye to cumbersome manual verification processes.
                  Our AI-powered platform automates identity verification,
                  document authentication, and risk assessment, ensuring a
                  smooth onboarding experience for your customers. Stay
                  compliant with AML regulations and safeguard your business
                  against fraud.
                </Text>
              </PlatformDetails>
            </PlatformInner>
          </div>
        </div>
      </PlatformSection>

      {/* Ready section */}

      <ReadySection>
        <ReadyKyc onClick={() => setOpenInfo(!openInfo)} />
      </ReadySection>

      <PopUp open={openInfo} close={() => setOpenInfo(false)} />
    </HomeLayout>
  );
};

export default Home;
