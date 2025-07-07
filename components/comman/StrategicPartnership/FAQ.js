import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
import SectionBlock from "../SectionBlock";

const FAQ = () => {
  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <div className="flex pb-[64px]">
          <span className="w-1/2 text-[#16363D] text-[18px] tracking-[.02em] leading-[100%] font-semibold !font-Archivo uppercase">
            FAQ
          </span>
          <h2 className="w-1/2 text-[#16363D] text-[66px] uppercase leading-[113%]">
            Eligibility Info
          </h2>
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default FAQ;
