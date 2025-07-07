import Image from "next/image";
import Container from "@/components/comman/Container";
import Button from "@/components/comman/Button";
import BackgroundBlock from "../BackgroundBlock";
import SectionBlock from "../SectionBlock";
import ElectronicsRepair from "@/public/images/ElectronicsRepair.png";

const heroParts = [
  { span: true, text: "smart" },
  { text: " Technology. " },
  { span: true, text: "Strategic" },
  { br: true },
  { text: "Solutions. " },
  { span: true, text: "Sustainable" },
  { text: " Growth. " },
];

const offering = [
  {
    id: 1,
    title: "Electronics Repair & Maintenance",
    listing: [
      "Generator and solar system diagnostics and repair",
      "Preventative maintenance for long-term reliability",
      "Hardware diagnostics, upgrades, and replacement",
    ],
    IMG: ElectronicsRepair,
  },
  {
    id: 2,
    title: "Smart Installations & IoT Systems",
    listing: [
      "Smart home and smart building automation",
      "IoT integration for homes and businesses",
      "Security and surveillance system installation",
      "Renewable energy integration (solar systems, energy monitoring)",
      "Backup power installation (generators, UPS systems, AVR)",
    ],
    IMG: ElectronicsRepair,
  },
  {
    id: 3,
    title: "IT Infrastructure & Support",
    listing: [
      "Server installation, configuration, and optimization (on-premise & hybrid)",
      "Network setup and structured cabling",
      "System performance tuning and troubleshooting",
      "Cloud backup, data recovery, and endpoint support",
      "Ongoing IT support and managed services",
      "Firewall and network security configuration",
      "Vulnerability assessments and compliance audits",
    ],
    IMG: ElectronicsRepair,
  },
  {
    id: 4,
    title: "Technology Consulting & Custom Solutions",
    listing: [
      "Custom IT strategy for public and private sector",
      "Technology roadmap planning and digital transformation",
      "Cloud migration (AWS, Azure, hybrid systems)",
      "Procurement support and vendor coordination",
      "System design for specialized or remote use cases",
      "Sustainable tech planning and smart energy optimization",
    ],
    IMG: ElectronicsRepair,
  },
  {
    id: 5,
    title: "Marketing, Branding & Design",
    listing: [
      "Branding strategy and visual identity development",
      "Graphic design (digital + print: brochures, reports, signage)",
      "Web design and development (including custom landing pages)",
      "Social media marketing and digital campaigns",
      "Content creation and storytelling for public awareness",
    ],
    IMG: ElectronicsRepair,
  },
];

const ServiceOfferings = () => {
  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <SectionBlock
          title="Service Offerings"
          heading={`Explore Our Capabilities`}
        />
        <div className="grid gap-12">
          {offering.map((service) => (
            <div
              key={service.id}
              className="gap-[46px] flex border-b-[1px] border-[rgba(22,54,61,.15)] pb-12 last:border-b-0"
            >
              <div className="w-1/2">
                <div
                  className="bg-[rgba(182,225,200,0.3)] w-[422px] h-[382px] border-[2px] 
                border-[rgba(22,54,61,.2)] flex items-center justify-center rounded-[10px]"
                >
                  <Image src={service.IMG} alt={service.title} height={324} />
                </div>
              </div>
              <div className="w-1/2 grid gap-8">
                <h2 className="text-[48px] text-[#16363D] leading-[130%] uppercase">
                  {service.title}
                </h2>
                <ul className="grid gap-3 list-disc list-inside">
                  {service.listing.map((item, idx) => (
                    <li
                      className="text-[#16363D] text-[22px] font-medium font-Archivo leading-[120%] tracking-[.03em]"
                      key={idx}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  label="More Details"
                  color="dark"
                  align="left"
                  size="sm"
                  variant="outline"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default ServiceOfferings;
