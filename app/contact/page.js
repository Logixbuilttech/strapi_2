import ArticleHero from "@/components/comman/ArticleHero";
import ContactForm from "@/components/comman/Contact/ContactForm";
import ContactHero from "@/components/comman/Contact/ContactHero";
import { contactPopulate } from "@/lib/populateMap";
import { fetchStrapi } from "@/lib/strapiApi";

export const revalidate = 3600;

export default async function Contact () {
    const contactData = await fetchStrapi("contact", {
      populate: contactPopulate.populate,
      tag: "contact",
      revalidate,
    });
    console.log("🚀 ~ Contact ~ contactData:", contactData)
  
  return (
    <>
        <ContactHero data={contactData} />
    </>
  );
};
