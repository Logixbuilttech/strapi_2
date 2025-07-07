import React from "react";
import Image from "next/image";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import Container from "@/components/comman/Container";
import { parseStrapiRichText } from "@/lib/parseStrapiRichText";

// Helper to render parsed rich text arrays (with highlight support)
function renderRichText(parts) {
  if (!Array.isArray(parts)) {
    if (typeof parts === "string") return parts;
    return null;
  }
  return parts.map((part, idx) => {
    if (part.br) return <br key={idx} />;
    if (part.span) return <span className="highlight" key={idx}>{part.text}</span>;
    return <React.Fragment key={idx}>{part.text}</React.Fragment>;
  });
}

const WhyChooseUs = ({ data }) => {
  if (!data) return null;

  // Parse the main title (rich text)
  const mainTitle = renderRichText(parseStrapiRichText(data.title));

  return (
    <BackgroundBlock>
      <Container>
        <div className="grid gap-4 justify-center text-center pb-12 lg:pb-[64px]">
          {data.subTitle && (
            <p className="text-[#EEECDE] text-[10px] md:text-[14px] lg:text-[18px] leading-[100%] tracking-[-0.02em] uppercase font-semibold">
              {data.subTitle}
            </p>
          )}
          <h3 className="text-[30px] md:text-[44px] lg:text-[66px] text-[#EEECDE] leading-[113%] uppercase">
            {mainTitle}
          </h3>
        </div>
      </Container>

      <div className="flex gap-3 overflow-auto px-6 m-auto max-w-[1360px] w-full">
        {Array.isArray(data.Item) &&
          data.Item.map((item) => (
            <div
              key={item.id}
              className="bg-[rgba(255,255,255,.07)] rounded-[16px] p-6 flex flex-col gap-2 justify-between text-center items-center
                h-[342px] lg:h-[382px] w-[300px] md:w-[334px] lg:w-[319px] min-w-[300px] md:min-w-[334px] lg:min-w-[319px]"
            >
              <h4 className="uppercase text-white text-[24px] md:text-[28px] leading-[113%] ">
                {item.title}
              </h4>
              <span className="min-w-[24px] min-h-[24px] rounded-[8px] flex items-center justify-center m-auto bg-[rgba(255,255,255,.1)] p-2.5">
                {item.icon && item.icon.url && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.icon.url}`}
                    alt={item.title}
                    width={item.icon.width || 40}
                    height={item.icon.height || 40}
                  />
                )}
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
