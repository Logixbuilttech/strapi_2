import ArticalHero from "@/components/comman/Artical/ArticalHero";
import HomeHero from "@/components/comman/Home/HomeHero";
import EverySolutions from "@/components/comman/WhatWeDo/EverySolutions";
import ServiceOfferings from "@/components/comman/WhatWeDo/ServiceOfferings";
import WhatWeDoHero from "@/components/comman/WhatWeDo/WhatWeDoHero";
import { WhatWeDo, WhoWeArePopulate } from "@/lib/populateMap";
import { fetchStrapi } from "@/lib/strapiApi";
import { whatWeDoblocksMap } from "../blocksMap";
import ServicesBlock from "@/components/comman/Home/ServicesBlock";
import WhyChooseUs from "@/components/comman/Home/WhyChooseUs";

export const revalidate = 3600;

export default async function whatwedo() {
  const whatWeDoData = await fetchStrapi("what-we-do", {
    populate: WhatWeDo.populate,
    tag: "whatWeDo",
    revalidate,
  });

  const heroData = whatWeDoData.Hero;
  const blocks = whatWeDoData.WhatWeDo || [];
  console.log("🚀 ~ blocks:", blocks)
  return (
    <>
      {/* <HomeHero /> */}
      <WhatWeDoHero />
      {blocks.map((b) => {
        switch (b.__component) {
          case "layout.content-block":
            return (
              <>
                {/* <ServicesBlock key={b.id} data={b} /> */}
              </>
            );
          case "layout.explore-capabilities":
            return <ServiceOfferings key={b.id} data={b} />;
          case "layout.feature-item":
            return (
              <div key={b.id}>
                <WhyChooseUs data={b} />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
