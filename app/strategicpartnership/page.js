import ApplicationForm from "@/components/comman/StrategicPartnership/ApplicationForm";
import ApplyIdea from "@/components/comman/StrategicPartnership/ApplyIdea";
import FAQ from "@/components/comman/StrategicPartnership/FAQ";
import HowWePartner from "@/components/comman/StrategicPartnership/HowWePartner";
import Intro from "@/components/comman/StrategicPartnership/Intro";
import OurPartner from "@/components/comman/StrategicPartnership/OurPartner";
import StrategicPartnershipHero from "@/components/comman/StrategicPartnership/StrategicPartnershipHero";

const StrategicPartnership = () => {
  return (
    <>
      <StrategicPartnershipHero />
      <Intro />
      <HowWePartner />
      <OurPartner />
      <ApplyIdea />
      <FAQ />
      <ApplicationForm />
    </>
  );
};

export default StrategicPartnership;
