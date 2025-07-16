import ApplicationForm from "@/components/comman/StrategicPartnership/ApplicationForm";
import ApplyIdea from "@/components/comman/StrategicPartnership/ApplyIdea";
import FAQ from "@/components/comman/StrategicPartnership/FAQ";
import HowWePartner from "@/components/comman/StrategicPartnership/HowWePartner";
import Intro from "@/components/comman/StrategicPartnership/Intro";
import OurPartner from "@/components/comman/StrategicPartnership/OurPartner";
import StrategicPartnershipHero from "@/components/comman/StrategicPartnership/StrategicPartnershipHero";
import { ArticlePopulate } from "@/lib/populateMap";
import { fetchStrapi } from "@/lib/strapiApi";



export const revalidate = 3600;
export default async function StrategicPartnership() {
  const supportNeededTabs = await fetchStrapi("support-needed-tabs", {
    populate: ArticlePopulate.populate,
    tag: "support-needed-tab",
    revalidate,
  });
  console.log("🚀 ~ StrategicPartnership ~ supportNeededTabs:", supportNeededTabs)

  const industryFocus = await fetchStrapi("industry-focus-tabs", {
    populate: ArticlePopulate.populate,
    tag: "industry-focus-tab",
    revalidate,
  });
  console.log("🚀 ~ StrategicPartnership ~ industryFocus:", industryFocus)

  return (
    <>
      <StrategicPartnershipHero />
      <Intro />
      <HowWePartner />
      <OurPartner />
      <ApplyIdea />
      <FAQ />
      <ApplicationForm industryFocusTabs={industryFocus} supportNeededTabs={supportNeededTabs}/>
    </>
  );
};

