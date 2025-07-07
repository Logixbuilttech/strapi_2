// import OurGoals from "@/components/comman/WhoWeAre/OurGoals";
// import OurValues from "@/components/comman/WhoWeAre/OurValues";
// import WhoWeAreHero from "@/components/comman/WhoWeAre/WhoWeAreHero";

// const WhoWeAre = () => {
//   return (
//     <>
      // <WhoWeAreHero />
      // <OurValues />
//       <OurGoals />
//     </>
//   );
// };

// export default WhoWeAre;



import { fetchStrapi } from "@/lib/strapiApi.js";
import { whoWeAreblocksMap } from "../blocksMap.js";
import { WhoWeArePopulate } from "@/lib/populateMap.js";
import WhoWeAreHero from "@/components/comman/WhoWeAre/CardWithLogo.js";
import OurValues from "@/components/comman/WhoWeAre/OurValues";
export const revalidate = 3600;

export default async function WhoWeAre() {
const whoWeAreData = await fetchStrapi("who-we-are", {
    populate: WhoWeArePopulate.populate,
    tag: "whoWeAre",
    revalidate,
  });

  const blocks = whoWeAreData.WhoWeAre || [];
  return (
    <>
      {blocks.map(b => {
        const Comp = whoWeAreblocksMap[b.__component];
        const uniqueKey = `${b.__component}-${b.id}`;
        return Comp ? <Comp key={uniqueKey} data={b} /> : null;
      })}
    </>
  );
}


