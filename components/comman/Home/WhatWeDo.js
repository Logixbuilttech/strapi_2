import Image from "next/image";
import Individuals from "@/public/images/Expertise.svg";
import Businesses from "@/public/images/Solutions.svg";
import Governments from "@/public/images/StrategicPartnership.svg";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import Container from "@/components/comman/Container";
import SectionBlock from "../SectionBlock";

const WhatWeDo = ({data}) => {
  console.log('what-we-do', data);
  const WhatWeDoBlock = [
    {
      id: 1,
      title: "Individuals",
      text: "Innovators and entrepreneurs ready to scale smarter.",
      IMG: Individuals,
    },
    {
      id: 2,
      title: "Businesses",
      text: "Organizations seeking a strategic edge in an evolving digital world.",
      IMG: Businesses,
    },
    {
      id: 3,
      title: "Governments",
      text: "Institutions modernizing services to better serve communities.",
      IMG: Governments,
    },
  ];

  return (
    <BackgroundBlock>
      <Container>
        <div className="pb-12 md:pb-10 lg:pb-[64px]">
          <div className="flex pb-[30px] md:pb-10 lg:pb-[48px]">
            <div className="w-1/2">
              <p className="font-semibold text-[10px] md:text-[14px] lg:text-[20px] leading-[100%] w-1/2 text-[#EEECDE] uppercase tracking-[-0.02em]">
                What We Do
              </p>
            </div>

            <div className="w-1/2">
              <h3 className="text-[30px] md:text-[44px] lg:text-[66px] leading-[113%] font-normal uppercase text-[#EEECDE]">
                Who We{" "}
                <span className="bg-[#E9F5AC] rounded-[3px] text-[#16363D] inline-block px-1">
                  Empower
                </span>
              </h3>
            </div>
          </div>

          <div
            className="relative pt-[48px] before:content-[''] before:bg-[rgba(238,236,222,.15)] before:absolute before:top-0 before:left-[-50%] 
        before:w-[200%] before:h-[1px]"
          >
            <div className="grid gap-4 w-1/2 ml-auto">
              <p className="text-[22px] lg:text-[22px] text-[#EEECDE] leading-[120%] tracking-[-0.02em]">
                We work with the{" "}
                <span className="bg-[#E9F5AC] rounded-[3px] text-[#16363D] px-1">
                  bold
                </span>{" "}
                — from individuals and entrepreneurs to organizations and
                governments. If you have a problem to solve or a vision to
                build, we want to work with you.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="flex gap-3 w-full max-w-[1360px] px-6 m-auto overflow-auto">
        {WhatWeDoBlock.map((item) => (
          <div
            key={item.id}
            className="bg-[rgba(255,255,255,.07)] p-6 rounded-[16px] flex justify-between items-center flex-col text-center
            
            min-w-[300px] md:min-w-[334px] lg:min-w-[429px] w-[300px] md:w-[334px] lg:w-[429px] h-[342px] lg:h-[412px]"
          >
            <h3 className="text-[#EEECDE] text-[24px] md:text-[28px] leading-[113%] uppercase">
              {item.title}
            </h3>
            <span className="bg-[rgba(255,255,255,.07)] rounded-[8px] flex items-center justify-center p-2.5">
              <Image src={item.IMG} alt={item.title} />
            </span>
            <p className="text-[#EEECDE] text-[14px] md:text-[18px] lg:text-[22px] leading-[120%] tracking-[0.03em]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </BackgroundBlock>
  );
};

export default WhatWeDo;
