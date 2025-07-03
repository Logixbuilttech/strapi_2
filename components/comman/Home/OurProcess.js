import BackgroundBlock from "@/components/comman/BackgroundBlock";
import SectionBlock from "../SectionBlock";
import Container from "@/components/comman/Container";
import Button from "@/components/comman/Button";

const OurProcess = () => {
  const OurProcessBlock = [
    {
      id: 1,
      title: "Strategic Discovery",
      text: "We dive deep into understanding your goals, challenges, and opportunities.",
    },
    {
      id: 2,
      title: "Tailored Innovation",
      text: "We design solutions aligned with your growth, not just today’s trends.",
    },
    {
      id: 3,
      title: "Seamless Execution",
      text: "We deliver with precision, quality, and a commitment to excellence.",
    },
    {
      id: 4,
      title: "Sustainable Support",
      text: "We stay connected, helping you adapt, optimize, and scale over time.",
    },
  ];

  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <SectionBlock
          title="Our Process"
          heading={`simple. powerful. <br/> built to last`}
          DescriptionText={[
            "At RenewEdge-Solutions, our work is guided <br/> by a simple principle: ",
          ]}
        />
        <div
          className="before:content-[''] before:bg-[rgba(22,54,61,.15)] before:w-[calc(100%-110px)] before:h-[1px]
        before:absolute before:top-0 before:right-0 relative"
        >
          {OurProcessBlock.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="w-full flex items-center">
                <div className="w-[110px]">
                  <p className="bg-[#16363D] w-[42px] h-[42px] rounded-full  flex justify-center items-center text-[22px] font-Archivo font-medium ">
                    {index + 1}
                  </p>
                </div>
                <div
                  className="w-[calc(100%-90px)] md:w-[calc(100%-174px)] lg:w-[calc(100%-110px)] border-b-[1px] border-[rgba(22,54,61,.15)] 
                py-[30px] md:py-10 lg:py-12 grid lg:flex items-center gap-4 md:gap-6 lg:gap-0"
                >
                  <div className="w-full lg:w-[calc(1/2*100%-55px)]">
                    <h3 className="text-[#16363D] text-[24px] md:text-[28px] lg:text-[48px] leading-[113%] lg:leading-[100%] uppercase w-full">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <p className="text-[#16363D] text-[14px] md:text-[18px] lg:text-[22px] leading-[120%] lg:leading-[27px] font-medium tracking-[-0.02em]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full pl-[174px] lg:pl-[110px] pt-9 md:pt-12 lg:pt-[52px] grid lg:flex gap-[30px] md:gap-10 lg:gap-0">
          <div className="w-full lg:w-[calc(1/2*100%-55px)]">
            <p className="text-[14px] md:text-[18px] lg:text-[22px] font-medium tracking-[.02em] leading-[120%] text-[#16363D]">
              When you work with us, you gain a long-term <br /> strategic
              partner, not just a vendor.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Button
              label="Let's Build Smarter Together"
              color="dark"
              align="left"
            />
          </div>
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default OurProcess;
