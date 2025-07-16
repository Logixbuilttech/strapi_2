import GalleryGrid from "@/components/comman/ThinkForward/GalleryGrid";
import ThinkForwardHero from "@/components/comman/ThinkForward/ThinkForwardHero";
import { ArticlePopulate } from "@/lib/populateMap";
import { fetchStrapi } from "@/lib/strapiApi";

export const revalidate = 3600;

export default async function ThinkForward() {
  const articleData = await fetchStrapi("articles", {
    populate: ArticlePopulate.populate,
    tag: "articles",
    revalidate,
  });
  const articleCategoryData = await fetchStrapi("gallery-categories", {
    populate: ArticlePopulate.populate,
    tag: "galleryCategory",
    revalidate,
  });


  return (
    <>
      <ThinkForwardHero />
      <GalleryGrid articleData={articleData} articleCategoryData={articleCategoryData} />
    </>
  );
};

