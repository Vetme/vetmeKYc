import styled from "styled-components";
import { LogoSVG } from "../icons";
import { Flex, Spacer, Text } from "..";

const FooterCon = styled.div`
  position: relative;
  background: #fff;
`;

const TopFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 990px;
  max-width: 100%;
  margin: auto;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Section = styled.div`
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 25px;
  }

  ul li,
  a {
    font-size: 14.25px;
    line-height: 21px;
    margin: 16px 0px;
  }
`;
const BottomFooter = styled.div`
  width: 990px;
  max-width: 100%;
  /* margin: auto; */
  margin: 50px auto 20px auto;
`;
const CustomLink = styled.a`
  padding: 0px 20px;
`;

const Footer = () => {
  return (
    <FooterCon className="container">
      <div className="wrapper">
        <TopFooter>
          <div className="flex mb-5">
            <LogoSVG />
          </div>
          <Section>
            <h4>Our Solutions</h4>

            <ul>
              <li>Biometric verification</li>
              <li>Personal identity verification</li>
              <li>Document verification</li>
            </ul>
          </Section>

          <Section>
            <h4>Services</h4>

            <ul>
              <li>KYC</li>
              <li>Vetting</li>
              <li>Fraud detection</li>
              <li>KYC certification</li>
            </ul>
          </Section>

          <Section>
            <h4>INDUSTRIES</h4>

            <ul>
              <li>E-commerce</li>
              <li>Crypto</li>
              <li>Financial Service</li>
              <li>Marketplace</li>
              <li>Transport</li>
              <li>Telecoms</li>
            </ul>
          </Section>

          <Section>
            <h4>Resources</h4>

            <ul>
              <li>Support</li>
              <li>Contact</li>
              <li>Privacy & Terms</li>
            </ul>
          </Section>
        </TopFooter>
        <BottomFooter id="support">
          <Flex justify="space-between">
            <Text>Copyright 2022. VetMe</Text>
            <Flex className="social-footer">
              <CustomLink href="https://twitter.com/VetmeToken?t=iydy_59nL4QSNB2YfQ8CIA&s=09">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0001 8.87579C10.2798 8.87579 8.87589 10.2797 8.87589 12C8.87589 13.7203 10.2798 15.1242 12.0001 15.1242C13.7204 15.1242 15.1243 13.7203 15.1243 12C15.1243 10.2797 13.7204 8.87579 12.0001 8.87579ZM21.3704 12C21.3704 10.7063 21.3821 9.42423 21.3095 8.13283C21.2368 6.63283 20.8946 5.30158 19.7978 4.2047C18.6985 3.10548 17.3696 2.76564 15.8696 2.69298C14.5759 2.62033 13.2939 2.63204 12.0025 2.63204C10.7087 2.63204 9.42667 2.62033 8.13527 2.69298C6.63527 2.76564 5.30402 3.10783 4.20714 4.2047C3.10792 5.30392 2.76808 6.63283 2.69542 8.13283C2.62277 9.42658 2.63449 10.7086 2.63449 12C2.63449 13.2914 2.62277 14.5758 2.69542 15.8672C2.76808 17.3672 3.11027 18.6985 4.20714 19.7953C5.30636 20.8945 6.63527 21.2344 8.13527 21.307C9.42902 21.3797 10.711 21.368 12.0025 21.368C13.2962 21.368 14.5782 21.3797 15.8696 21.307C17.3696 21.2344 18.7009 20.8922 19.7978 19.7953C20.897 18.6961 21.2368 17.3672 21.3095 15.8672C21.3845 14.5758 21.3704 13.2938 21.3704 12V12ZM12.0001 16.807C9.33995 16.807 7.19308 14.6602 7.19308 12C7.19308 9.33986 9.33995 7.19298 12.0001 7.19298C14.6603 7.19298 16.8071 9.33986 16.8071 12C16.8071 14.6602 14.6603 16.807 12.0001 16.807ZM17.004 8.11876C16.3829 8.11876 15.8814 7.6172 15.8814 6.99611C15.8814 6.37501 16.3829 5.87345 17.004 5.87345C17.6251 5.87345 18.1267 6.37501 18.1267 6.99611C18.1269 7.14359 18.0979 7.28966 18.0416 7.42595C17.9852 7.56224 17.9026 7.68607 17.7983 7.79036C17.694 7.89464 17.5701 7.97733 17.4339 8.03368C17.2976 8.09004 17.1515 8.11895 17.004 8.11876V8.11876Z"
                    fill="black"
                  />
                </svg>
              </CustomLink>
              <CustomLink href="https://twitter.com/VetmeToken?t=iydy_59nL4QSNB2YfQ8CIA&s=09">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM17.0461 9.41484C17.0531 9.525 17.0531 9.63984 17.0531 9.75234C17.0531 13.193 14.4328 17.1562 9.64453 17.1562C8.16797 17.1562 6.79922 16.7273 5.64609 15.9891C5.85703 16.0125 6.05859 16.0219 6.27422 16.0219C7.49297 16.0219 8.61328 15.6094 9.50625 14.9109C8.3625 14.8875 7.40156 14.1375 7.07344 13.1063C7.47422 13.1648 7.83516 13.1648 8.24766 13.0594C7.65873 12.9397 7.12939 12.6199 6.74957 12.1542C6.36974 11.6885 6.16286 11.1056 6.16406 10.5047V10.4719C6.50859 10.6664 6.91406 10.7859 7.33828 10.8023C6.98166 10.5647 6.6892 10.2427 6.48682 9.86491C6.28445 9.48715 6.17841 9.06528 6.17813 8.63672C6.17813 8.15156 6.30469 7.70859 6.53203 7.32422C7.18571 8.12891 8.0014 8.78705 8.92609 9.25586C9.85078 9.72466 10.8638 9.99364 11.8992 10.0453C11.5312 8.27578 12.8531 6.84375 14.4422 6.84375C15.1922 6.84375 15.8672 7.15781 16.343 7.66406C16.9312 7.55391 17.4937 7.33359 17.9953 7.03828C17.8008 7.64062 17.393 8.14922 16.8516 8.47031C17.3766 8.41406 17.8828 8.26875 18.3516 8.06484C17.9977 8.58516 17.5547 9.04688 17.0461 9.41484Z"
                    fill="black"
                  />
                </svg>
              </CustomLink>
              <CustomLink href="https://twitter.com/VetmeToken?t=iydy_59nL4QSNB2YfQ8CIA&s=09">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="black"
                  />
                </svg>
              </CustomLink>
            </Flex>
          </Flex>
        </BottomFooter>
      </div>
    </FooterCon>
  );
};

export default Footer;
