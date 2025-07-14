import qs from "qs";
import ArticleWithTOC from "./ArticleWithTOC";
import HomeHero from "@/components/comman/Home/HomeHero";
import ArticleHero from "@/components/comman/ArticleHero";

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const queryString = qs.stringify(
    {
      filters: { Slug: { $eq: slug } },
      populate: "*",
    },
    { encode: false }
  );

  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?${queryString}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { tags: ["articles-slug"], revalidate: 60 },
  });

  if (!res.ok) {
    return <div>Error loading article</div>;
  }

  const { data } = await res.json();
  const article = data && data[0] && data[0];
  console.log("article", article);
  if (!article) return <div>Article not found</div>;

  return (
    <>
      <div className="[&>section>div>h2]:!pb-[84px] md:[&>section>div>h2]:!pb-[92px] lg:[&>section>div>h2]:!pb-[102px] xl:[&>section>div>h2]:!pb-[116px]">
        <ArticleHero data={article.HeroText} />
      </div>
      <ArticleWithTOC article={article} />
    </>
  );
}
