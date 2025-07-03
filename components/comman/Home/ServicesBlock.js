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

const ServicesBlock = () => {
  const Services = [
    {
      id: 1,
      title: (
        <>
          Electronics Repair <br /> & Maintenance
        </>
      ),
      text: "Keeping your high-impact systems, from generators to solar components and power systems to keep your operations running without disruption",
      discoverMore: "",
      IMG: ElectronicsRepair,
    },
    {
      id: 2,
      title: (
        <>
          Smart Installations <br /> & IoT Systems
        </>
      ),
      text: "Designing and installing smart home systems, IoT networks, solar solutions, surveillance systems, and energy management technologies for modern living and working.",
      discoverMore: "",
      IMG: SmartInstallations,
    },
    {
      id: 3,
      title: (
        <>
          IT Infrastructure
          <br /> & Support
        </>
      ),
      text: "Building resilient IT systems with services including network setup, cybersecurity, troubleshooting, cloud integration, and data recovery — tailored to your needs.",
      discoverMore: "",
      IMG: ITInfrastructure,
    },
    {
      id: 4,
      title: (
        <>
          Technology Consulting <br />& Custom Solutions
        </>
      ),
      text: "Guiding businesses and governments in crafting sustainable, future-ready technology strategies — from smart city initiatives to business digitalization.",
      discoverMore: "",
      IMG: TechnologyConsulting,
    },
    {
      id: 5,
      title: (
        <>
          Marketing, <br />
          Branding & Design
        </>
      ),
      text: "Creating user-centric websites and digital experiences that drive engagement, growth, and brand evolution — with marketing solutions to connect with your audience.",
      discoverMore: "",
      IMG: MarketingBranding,
    },
  ];

  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <SectionBlock
          title="What We Do"
          heading="Tech That Works Strategy That Scales Design That Connects"
          DescriptionText={[
            "Whether you're looking to modernize your infrastructure, install <br/> smart systems, repair electronics, or build your digital presence.",
            "We make it seamless, strategic, and built for sustainable growth.",
          ]}
        />
        <div className="grid gap-3">
          {Services.map((service) => (
            <div
              key={service.id}
              className="grid lg:flex border-[1px] border-[#16363D] rounded-[16px] bg-[rgba(182,225,200,0.3)] text-center 
              overflow-hidden lg:h-[600px] lg:p-0 p-1 "
            >
              <div className="w-full lg:w-1/2 bg-[#16363D] p-10 flex flex-col justify-between gap-10 lg:gap-2 text-center rounded-[12px] lg:rounded-none ">
                <h3 className="text-[#EEECDE] text-[24px] md:text-[28px] lg:text-[48px] uppercase leading-[113%] text-center">
                  {service.title}
                </h3>
                <p className="text-[14px] md:text-[18px] lg:text-[22px] leading-[120%] font-medium tracking-[-0.02em] max-w-[420px] lg:max-w-fit m-auto">
                  {service.text}
                </p>
                <Button label="Discover More" variant="outline" size="sm" />
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
                <Image
                  src={service.IMG}
                  alt={service.title}
                  className="max-[1300px]:max-h-[310px] min-[1301px]:max-h-fit w-fit"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default ServicesBlock;
