import React from "react";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import SectionBlock from "../SectionBlock";
import Container from "@/components/comman/Container";
import Button from "@/components/comman/Button";
import { parseStrapiRichText } from "@/lib/parseStrapiRichText";

// Helper to render parsed rich text arrays (with highlight support)
function renderRichText(parts) {
  if (!Array.isArray(parts)) {
    if (typeof parts === "string") return parts;
    return null;
  }
  return parts.map((part, idx) => {
    if (part.br) return <br key={idx} />;
    if (part.span)
      return (
        <span className="highlight" key={idx}>
          {part.text}
        </span>
      );
    return <React.Fragment key={idx}>{part.text}</React.Fragment>;
  });
}

const OurProcess = ({ data }) => {
  if (!data) return null;

  return (
    <section className="pb-[84px] sm:pb-[92px] lg:pb-[102px] xl:pb-[116px] bg-[#EEECDE]">
      <Container>
        <div
          className="before:content-[''] before:bg-[rgba(22,54,61,.15)] before:w-full md:before:w-[calc(100%-176px)] lg:before:w-[calc(100%-110px)] before:h-[1px]
        before:absolute before:top-0 before:right-0 relative"
        >
          {Array.isArray(data.Step) &&
            data.Step.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center border-b-[1px] border-[rgba(22,54,61,.15)] md:border-b-0 "
              >
                <div className="w-full flex items-center">
                  <div className="w-[90px] md:w-[176px] lg:w-[110px]">
                    <p className="bg-[#16363D] w-[24px] h-[24px] md:w-[42px] md:h-[42px] rounded-full  flex justify-center items-center text-[12px] md:text-[22px] font-Archivo font-medium text-[#EEECDE]">
                      {index + 1}
                    </p>
                  </div>
                  <div
                    className="w-[calc(100%-90px)] md:w-[calc(100%-176px)] lg:w-[calc(100%-110px)] md:border-b-[1px] md:border-[rgba(22,54,61,.15)]
                  py-[30px] md:py-10 lg:py-12 grid lg:flex items-center gap-4 md:gap-6 lg:gap-0"
                  >
                    <div className="w-full lg:w-[calc(1/2*100%-55px)]">
                      <h3 className="text-[#16363D] text-[24px] md:text-[28px] lg:text-[48px] leading-[113%] lg:leading-[100%] uppercase w-full">
                        {renderRichText(parseStrapiRichText(item.LeftText))}
                      </h3>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <p className="text-[#16363D] text-[14px] md:text-[18px] lg:text-[22px] leading-[120%] lg:leading-[27px] font-medium tracking-[-0.02em]">
                        {renderRichText(parseStrapiRichText(item.RightText))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full md:pl-[174px] lg:pl-[110px] pt-9 md:pt-12 lg:pt-[52px] grid lg:flex gap-[30px] md:gap-10 lg:gap-0">
          <div className="w-full lg:w-[calc(1/2*100%-55px)]">
            <p className="text-[14px] md:text-[18px] lg:text-[22px] font-medium tracking-[.02em] leading-[120%] text-[#16363D]">
              {data.text}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            {data.Button && data.Button.text && (
              <Button
                label={data.Button.text}
                color="dark"
                align="left"
                href={data.Button.href}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProcess;
