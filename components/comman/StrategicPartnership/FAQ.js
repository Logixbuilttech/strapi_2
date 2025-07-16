"use client"
import { useState } from "react";
import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
import SectionBlock from "../SectionBlock";
import { ChevronDown, X } from "lucide-react";
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

const FAQ = ({ data }) => {
  console.log("🚀 ~ FAQ ~ data:", JSON.stringify(data));
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <div className="flex pb-[64px]">
          <span className="w-1/2 text-[#16363D] text-[18px] tracking-[.02em] leading-[100%] font-semibold !font-Archivo uppercase">
            {data?.LeftText}
          </span>
          <h2 className="w-1/2 text-[#16363D] text-[66px] uppercase leading-[113%]">
            {data?.rightText}
          </h2>
        </div>
        <div className="space-y-4">
          {data?.FAQ?.map((faq, index) => (
            <div key={faq.id}>
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left transition-colors duration-300 rounded ${activeIndex === index
                    ? "bg-[#12343E] text-white"
                    : "bg-[#0B2930] text-white hover:bg-[#12343E]"
                  }`}
              >
                <span className="flex items-center gap-3 font-semibold text-[16px] uppercase tracking-wide">
                  <span className="text-[14px]">{index + 1}</span>
                  {faq.Question}
                </span>
                <span className="text-white">
                  {activeIndex === index ? <X size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } bg-[#12343E] text-white px-6 text-sm leading-relaxed`}
              >
                <div className="py-4">
                  {renderRichText(parseStrapiRichText(faq.Answer))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default FAQ;
