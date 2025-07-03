import Image from "next/image";
import Container from "@/components/comman/Container";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import CenterTitle from "../CenterTitle";

import innovation from "@/public/images/innovation.svg";
import Simplicity from "@/public/images/Simplicity.svg";
import Partnership from "@/public/images/Partnership.svg";
import sustainability from "@/public/images/sustainability.svg";
import Excellence from "@/public/images/Excellence.svg";

const values = [
  {
    id: 1,
    heading: "Innovation with Integrity:",
    text: "We bring bold ideas to life without <br /> compromising ethics, quality, or trust.",
    IMG: innovation,
  },
  {
    id: 2,
    heading: "Simplicity with Power:",
    text: "The best solutions are those that simplify, <br /> streamline, and strengthen.",
    IMG: Simplicity,
  },
  {
    id: 3,
    heading: "Partnership over Transaction:",
    text: "We are committed to building lasting, strategic <br /> relationships, not just closing deals",
    IMG: Partnership,
  },
  {
    id: 4,
    heading: "Sustainability for the Future:",
    text: "Every solution we create is designed to endure, <br /> evolve, and empower future generations.",
    IMG: sustainability,
  },
  {
    id: 5,
    heading: "Excellence in Every Detail:",
    text: "We deliver with precision, passion, and <br /> professionalism because every detail matters.",
    IMG: Excellence,
  },
];

const OurValues = () => {
  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <CenterTitle
          SmallTitle="Our Values"
          Title="The Principles That Drive Us"
        />
        <div className="flex flex-wrap gap-3">
          {values.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 2 ? "w-full" : "w-full md:w-[calc(50%-6px)]"
              }`}
            >
              <div className="bg-[#16363D] rounded-[16px] p-6 flex flex-col justify-between gap-2 h-[388px] text-center">
                <h3 className="text-[28px] text-[#EEECDE] leading-[113%]">
                  {item.heading}
                </h3>
                <span className="w-[64px] h-[64px] bg-[rgba(255,255,255,.1)] rounded-[8px] flex items-center justify-center m-auto">
                  <Image src={item.IMG} alt={item.heading} />
                </span>
                <p
                  className="text-[22px] font-medium leading-[120%] tracking-[.03em]"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default OurValues;
