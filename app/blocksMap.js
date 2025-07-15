
import FeatureCard from "@/components/comman/Home/FeatureCard";
import HomeHero from "@/components/comman/Home/HomeHero";
import OurProcess from "@/components/comman/Home/OurProcess";
import ServicesBlock from "@/components/comman/Home/ServicesBlock";
import WhatWeDo from "@/components/comman/Home/WhatWeDo";
import WhyChooseUs from "@/components/comman/Home/WhyChooseUs";
import ServiceOfferings from "@/components/comman/WhatWeDo/ServiceOfferings";
import CardWithLogo from "@/components/comman/WhoWeAre/CardWithLogo";
import OurGoals from "@/components/comman/WhoWeAre/OurGoals";
import OurValues from "@/components/comman/WhoWeAre/OurValues";


export const homeBlocksMap = {
  "layout.hero": HomeHero, 
  "layout.content-block": ServicesBlock ,
  "layout.feature-card": FeatureCard, 
  "layout.feature-item": WhyChooseUs, 
  "layout.step-item": OurProcess,
  "layout.target-audience-section": WhatWeDo,
};

export const whoWeAreblocksMap = {
  "layout.hero": HomeHero, 
  "layout.feature-item-who-we-are": OurValues, 
  "layout.goals-who-we-are": OurGoals,
};

export const whatWeDoblocksMap = {
  "layout.content-block": ServicesBlock, 
  "layout.feature-item": WhyChooseUs, 
  "layout.explore-capabilities": ServiceOfferings,
};