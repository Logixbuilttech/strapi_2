import { fetchStrapi } from "@/lib/strapiApi.js";
import { homeBlocksMap } from "./blocksMap.js";
import { homePopulate } from "@/lib/populateMap.js";
import HomeHero from "@/components/comman/Home/HomeHero.js";
import ServicesBlock from "@/components/comman/Home/ServicesBlock.js";
import FeatureCard from "@/components/comman/Home/FeatureCard.js";
import WhyChooseUs from "@/components/comman/Home/WhyChooseUs.js";
import OurProcess from "@/components/comman/Home/OurProcess.js";
import WhatWeDo from "@/components/comman/Home/WhatWeDo.js";

export const revalidate = 3600;

export default async function Home() {
  const homeData = await fetchStrapi("home", {
    populate: homePopulate,
    tag: "home",
    revalidate,
  });

  const blocks = homeData.Home || [];

  return (
    <>
      {blocks.map((b) => {
        switch (b.__component) {
          case "layout.hero":
            return <HomeHero key={b.id} data={b} />;
          case "layout.content-block":
            return (
              
                <div
                  key={b.id}
                  className={`bg-[#EEECDE] rounded-[16px_16px_0_0] pt-[64px] md:pt-[72px] lg:pt-[82px] xl:pt-[96px] relative z-10 -mt-5 ${
                    b.Background && "darkBG"
                  }`}
                >
                  <ServicesBlock key={b.id} data={b} />
                </div>
             
            );
          case "layout.feature-card":
            return <FeatureCard key={b.id} data={b} />;
          case "layout.feature-item":
            return (
              <div key={b.id}>
                <WhyChooseUs data={b} />
              </div>
            );
          case "layout.step-item":
            return <OurProcess key={b.id} data={b} />;
          case "layout.target-audience-section":
            return (
              <div
                key={b.id}
                className="pb-[84px] md:pb-[92px] lg:pb-[102px] xl:pb-[116px]"
              >
                <WhatWeDo key={b.id} data={b} />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
