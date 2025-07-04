
import FeatureCard from "@/components/comman/Home/FeatureCard";
import HomeHero from "@/components/comman/Home/HomeHero";
import OurProcess from "@/components/comman/Home/OurProcess";
import ServicesBlock from "@/components/comman/Home/ServicesBlock";
import WhatWeDo from "@/components/comman/Home/WhatWeDo";
import WhyChooseUs from "@/components/comman/Home/WhyChooseUs";


export const blocksMap = {
  "layout.hero": HomeHero, 
  "layout.content-block": ServicesBlock,
  "layout.feature-card": FeatureCard, 
  "layout.feature-item": WhyChooseUs, 
  "layout.step-item": OurProcess,
  "layout.target-audience-section": WhatWeDo,
};