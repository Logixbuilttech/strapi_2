import { fetchStrapi } from "@/lib/strapiApi.js";
import { homeBlocksMap } from "./blocksMap.js";
import { homePopulate } from "@/lib/populateMap.js";

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
      {blocks.map(b => {
        const Comp = homeBlocksMap[b.__component];
        const uniqueKey = `${b.__component}-${b.id}`;
        return Comp ? <Comp key={uniqueKey} data={b} /> : null;
      })}
    </>
  );
}


