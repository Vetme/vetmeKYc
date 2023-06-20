import React, { useMemo } from "react";
import Layout from "../components/layout/Layout";
import { PInner, PricingSection } from "./styles";
import { Flex } from "../components";
import PricingCard from "../components/utils/Pricing";
import { pricesData } from "./data";
import HomeLayout from "../components/layout/HomeLayout";

const Pricing = () => {
  const prices = useMemo(() => {
    return pricesData;
  }, []);
  return (
    <HomeLayout>
      <PricingSection id="pricing" className="page">
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
    </HomeLayout>
  );
};

export default Pricing;
