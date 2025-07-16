import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
import Image from "next/image";
import { parseStrapiRichText } from "@/lib/parseStrapiRichText";
import React from "react";

// Helper for rich text rendering
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

const OurPartner = ({ data }) => {
  console.log("🚀 ~ OurPartner ~ data:", JSON.stringify(data))
  // Helper to get full image URL if needed
  const getImageUrl = (img) => {
    if (!img?.url) return "";
    // If your Strapi uploads are on the same domain, this is fine.
    // Otherwise, prefix with your API base URL, e.g.:
    // return process.env.NEXT_PUBLIC_STRAPI_URL + img.url;
    return img.url;
  };

  // Parse right heading
  const rightHeading = parseStrapiRichText(data?.RightText);

  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <div className="flex pb-[64px]">
          <span className="w-1/2 text-[#16363D] text-[18px] tracking-[.02em] leading-[100%] font-semibold !font-Archivo">
            {data?.leftText}
          </span>
          <h2 className="w-1/2 text-[#16363D] text-[66px] uppercase leading-[113%]">
            {renderRichText(rightHeading)}
          </h2>
        </div>

        <div className="flex flex-col gap-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data?.Card?.slice(0, 3).map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center text-center bg-[#16363D] rounded-[16px] h-[260px] justify-between p-6"
              >
                <span className="bg-[rgba(255,255,255,.1)] rounded-[8px] w-[64px] h-[64px] mx-auto flex items-center justify-center">
                  <Image
                    width={partner.Image?.width || 34}
                    height={partner.Image?.height || 34}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${getImageUrl(partner.Image)}`}
                    alt={partner.Image?.alternativeText || ""}
                  />
                </span>
                <h3 className="text-[28px] text-[#EEECDE] leading-[113%] uppercase">
                  {renderRichText(parseStrapiRichText(partner.Title))}
                </h3>
              </div>
            ))}
          </div>

   
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data?.Card?.slice(3).map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center text-center bg-[#16363D] rounded-[16px] h-[260px] justify-between p-6"
              >
                <span className="bg-[rgba(255,255,255,.1)] rounded-[8px] w-[64px] h-[64px] mx-auto flex items-center justify-center">
                  <Image
                    width={partner.Image?.width || 34}
                    height={partner.Image?.height || 34}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${getImageUrl(partner.Image)}`}
                    alt={partner.Image?.alternativeText || ""}
                  />
                </span>
                <h3 className="text-[28px] text-[#EEECDE] leading-[113%] uppercase">
                  {renderRichText(parseStrapiRichText(partner.Title))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default OurPartner;
