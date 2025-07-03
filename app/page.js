"use client";

import React from "react";
import ServicesBlock from "@/components/comman/Home/ServicesBlock";
import WhyChooseUs from "@/components/comman/Home/WhyChooseUs";
import OurProcess from "@/components/comman/Home/OurProcess";
import HomeHero from "@/components/comman/Home/HomeHero";
import WhatWeDo from "@/components/comman/Home/WhatWeDo";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <ServicesBlock />
      <WhyChooseUs />
      <OurProcess />
      <WhatWeDo />
    </>
  );
};

export default HomePage;
