import Image from "next/image";
import Expertise from "@/public/images/Expertise.svg";
import Solutions from "@/public/images/Solutions.svg";
import StrategicPartnership from "@/public/images/StrategicPartnership.svg";
import BuiltFuture from "@/public/images/BuiltFuture.svg";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import Container from "@/components/comman/Container";

const WhyChooseUs = () => {
  const WhyChooseBlock = [
    {
      id: 1,
      title: "Expertise That Delivers",
      text: "A team of forward-thinking problem-solvers, not just service providers.",
      IMG: Expertise,
    },
    {
      id: 2,
      title: "Solutions That Scale",
      text: "We design and implement systems that evolve with your needs.",
      IMG: Solutions,
    },
    {
      id: 3,
      title: "Strategic Partnership",
      text: "More than vendors — we become your growth partner.",
      IMG: StrategicPartnership,
    },
    {
      id: 4,
      title: "Built for the Future",
      text: "Every solution is crafted for today’s challenges and tomorrow’s opportunities.",
      IMG: BuiltFuture,
    },
  ];

  return (
    <BackgroundBlock>
      <Container>
        <div className="grid gap-4 justify-center text-center pb-12 lg:pb-[64px]">
          <p className="text-[#EEECDE] text-[10px] md:text-[14px] lg:text-[18px] leading-[100%] tracking-[-0.02em] uppercase font-semibold">
            Why Choose Us
          </p>
          <h3 className="text-[30px] md:text-[44px] lg:text-[66px] text-[#EEECDE] leading-[113%] uppercase">
            The Edge We{" "}
            <span className="bg-[#E9F5AC] text-[#16363D] px-1 rounded-[4px] leading-[100%] inline-block align-top">
              Bring
            </span>
          </h3>
        </div>
      </Container>

      <div className="flex gap-3 overflow-auto px-6 m-auto max-w-[1360px] w-full">
        {WhyChooseBlock.map((item) => (
          <div
            key={item.id}
            className="bg-[rgba(255,255,255,.07)] rounded-[16px] p-6 flex flex-col gap-2 justify-between text-center items-center
              h-[342px] lg:h-[382px] w-[300px] md:w-[334px] lg:w-[319px] min-w-[300px] md:min-w-[334px] lg:min-w-[319px]"
          >
            <h4 className="uppercase text-white text-[24px] md:text-[28px] leading-[113%] ">
              {item.title}
            </h4>
            <span className="min-w-[24px] min-h-[24px] rounded-[8px] flex items-center justify-center m-auto bg-[rgba(255,255,255,.1)] p-2.5">
              <Image src={item.IMG} alt={item.title} />
            </span>
            <p className="text-[#EEECDE] text-[18px] lg:text-[22px] font-medium leading-[120%] tracking-[-0.03em]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </BackgroundBlock>
  );
};

export default WhyChooseUs;
