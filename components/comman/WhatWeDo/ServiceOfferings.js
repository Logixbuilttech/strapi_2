import Image from "next/image";
import Container from "@/components/comman/Container";
import Button from "@/components/comman/Button";
import BackgroundBlock from "../BackgroundBlock";
import SectionBlock from "../SectionBlock";
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

const ServiceOfferings = ({ data }) => {
  if (!data || !Array.isArray(data.Card)) return null;
  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <SectionBlock
          title="Service Offerings"
          heading={"Explore Our Capabilities"}
        />
        <div className="grid gap-12">
          {data.Card.map((service) => (
            <div
              key={service.id}
              className="gap-[46px] flex border-b-[1px] border-[rgba(22,54,61,.15)] pb-12 last:border-b-0"
            >
              <div className="w-1/2">
                <div
                  className="bg-[rgba(182,225,200,0.3)] w-[422px] h-[382px] border-[2px] \
                border-[rgba(22,54,61,.2)] flex items-center justify-center rounded-[10px]"
                >
                  {service.Image && service.Image.url && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL || ""}${service.Image.url}`}
                      alt={service.Image.alternativeText || service.Title?.[0]?.children?.[0]?.text || "Service Image"}
                      width={service.Image.width || 292}
                      height={service.Image.height || 354}
                    />
                  )}
                </div>
              </div>
              <div className="w-1/2 grid gap-8">
                <h2 className="text-[48px] text-[#16363D] leading-[130%] uppercase">
                  {renderRichText(parseStrapiRichText(service.Title))}
                </h2>
                {/* Render the list items */}
                {Array.isArray(service.Content) && service.Content.length > 0 &&
                  service.Content.map((contentBlock, idx) => {
                    // Only handle unordered lists for now
                    if (contentBlock.type === "list" && contentBlock.format === "unordered") {
                      return (
                        <ul className="grid gap-3 list-disc list-inside" key={idx}>
                          {contentBlock.children &&
                            contentBlock.children.map((item, i) => (
                              <li
                                className="text-[#16363D] text-[22px] font-medium font-Archivo leading-[120%] tracking-[.03em]"
                                key={i}
                              >
                                {item.children && item.children[0] && item.children[0].text}
                              </li>
                            ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                {service.Button && service.Button.text && (
                  <Button
                    label={service.Button.text}
                    color="dark"
                    align="left"
                    size="sm"
                    variant="outline"
                    href={service.Button.href}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default ServiceOfferings;
