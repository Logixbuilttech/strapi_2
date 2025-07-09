import Image from "next/image";
import ElectronicsRepair from "@/public/images/ElectronicsRepair.png";
import SmartInstallations from "@/public/images/SmartInstallations.png";
import ITInfrastructure from "@/public/images/IT-Infrastructure.png";
import TechnologyConsulting from "@/public/images/TechnologyConsulting.png";
import MarketingBranding from "@/public/images/MarketingBranding.png";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import Container from "@/components/comman/Container";
import SectionBlock from "../SectionBlock";
import Button from "@/components/comman/Button";
import { parseStrapiRichText } from "@/lib/parseStrapiRichText";

const ServicesBlock = ({ data }) => {
  console.log("🚀 ~ ServicesBlock ~ data:", data)
  if (!data) return null;

  // Parse rightText and subText arrays
  const headingParts = parseStrapiRichText(data.rightText);
  // Parse the whole subText array at once
  const descriptionParts = parseStrapiRichText(data.subText);
  return (
      <Container>
        <SectionBlock
          title={data.leftText || ""}
          heading={headingParts}
          DescriptionText={descriptionParts}          
        />
      </Container>
  );
};

export default ServicesBlock;
