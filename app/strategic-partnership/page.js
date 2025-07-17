import HomeHero from "@/components/comman/Home/HomeHero";
import ServicesBlock from "@/components/comman/Home/ServicesBlock";
import ApplicationForm from "@/components/comman/StrategicPartnership/ApplicationForm";
import ApplyIdea from "@/components/comman/StrategicPartnership/ApplyIdea";
import FAQ from "@/components/comman/StrategicPartnership/FAQ";
import HowWePartner from "@/components/comman/StrategicPartnership/HowWePartner";
import Intro from "@/components/comman/StrategicPartnership/Intro";
import OurPartner from "@/components/comman/StrategicPartnership/OurPartner";
import StrategicPartnershipHero from "@/components/comman/StrategicPartnership/StrategicPartnershipHero";
import { ArticlePopulate, StrategicPopulate } from "@/lib/populateMap";
import { fetchStrapi } from "@/lib/strapiApi";

export const revalidate = 3600;
export default async function StrategicPartnership() {
  const supportNeededTabs = await fetchStrapi("support-needed-tabs", {
    populate: StrategicPopulate.populate,
    tag: "support-needed-tab",
    revalidate,
  });
  console.log(
    "🚀 ~ StrategicPartnership ~ supportNeededTabs:",
    supportNeededTabs
  );

  const strategicPartnershipData = await fetchStrapi("strategic-partnership", {
    populate: StrategicPopulate.populate,
    tag: "strategic-partnership",
    revalidate,
  });

  const strategicPartnershipForm = await fetchStrapi("partnership-applications", {
    populate: StrategicPopulate.populate,
    tag: "partnership-application",
    revalidate,
  });
  console.log("🚀 ~ StrategicPartnership ~ strategicPartnershipForm:", strategicPartnershipForm)
  console.log("🚀 ~ StrategicPartnership ~ strategicPartnershipData:", strategicPartnershipData);

  const industryFocus = await fetchStrapi("industry-focus-tabs", {
    populate: StrategicPopulate.populate,
    tag: "industry-focus-tab",
    revalidate,
  });
  console.log("🚀 ~ StrategicPartnership ~ industryFocus:", industryFocus);

  const blocks = strategicPartnershipData.StrategicPartnership || [];
  console.log("🚀 ~ blocks:", blocks);

  return (
    <>
      {/* <StrategicPartnershipHero />
      <Intro />
      <HowWePartner />
      <OurPartner />
      <ApplyIdea />
      <FAQ />
      <ApplicationForm industryFocusTabs={industryFocus} supportNeededTabs={supportNeededTabs} /> */}
      {blocks.map((b) => {
        switch (b.__component) {
          case "layout.hero":
            return <StrategicPartnershipHero key={b.id} data={b} />;
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
          case "layout.titlewith-short-text":
            return <HowWePartner key={b.id} data={b} />;
          case "layout.our-partnership":
            return <OurPartner key={b.id} data={b} />;
          case "layout.apply-idea":
            return <ApplyIdea key={b.id} data={b} />;
          case "layout.partnership-faq":
            return <FAQ key={b.id} data={b} />;
          default:
            return null;
        }
      })}
           <ApplicationForm industryFocusTabs={industryFocus} supportNeededTabs={supportNeededTabs} />
    </>
  );
}
