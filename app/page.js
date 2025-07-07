
import { blocksMap } from "./blocksMap.js";
import qs from "qs";

export const revalidate = 3600;

export default async function Home() {
  const query = qs.stringify(
    {
      populate: {
        Home: {
          on: {
            "layout.hero": { populate: '*' },
            "layout.content-block": { populate: '*' },
            "layout.feature-card": {
              populate: {
                card: { populate: '*' }
              }
            },
            "layout.feature-item": {
              populate: {
                Item: { populate: '*' }
              }
            },
            "layout.step-item": { populate: '*' },
            "layout.target-audience-section": {
              populate: {
                Item: { populate: '*' }
              }
            }
          }
        }
      }
    },
    { encodeValuesOnly: true }
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home?${query}`,
    {
      next: { tags: ["home"] },
      // headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }, // Uncomment if using API token
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Strapi fetch error:", res.status, errorText);
    throw new Error("Failed to fetch home page data");
  }

  const { data } = await res.json();
  const blocks = data.Home || [];

  return (
    <>
      {blocks.map(b => {
        const Comp = blocksMap[b.__component];
        const uniqueKey = `${b.__component}-${b.id}`;
        return Comp ? <Comp key={uniqueKey} data={b} /> : null;
      })}
    </>
  );
}


