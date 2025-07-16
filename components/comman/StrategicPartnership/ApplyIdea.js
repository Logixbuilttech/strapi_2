import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
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

const ApplyIdea = ({ data }) => {
  // Extract the relevant fields
  const shortText = data?.TitleWithShortText?.ShortText;
  const titleParts = parseStrapiRichText(data?.TitleWithShortText?.Title);

  // Find the "project startup..." line and split it for highlighting
  const projectLineObj = data?.TitleWithShortText?.Title?.find(
    (block) =>
      block.children &&
      block.children[0] &&
      block.children[0].text &&
      block.children[0].text.includes("project startup")
  );
  const projectWords =
    projectLineObj?.children[0]?.text.split(" ") || [
      "project",
      "startup",
      "small business",
      "big ideas",
      "project",
      "startup",
    ];

  // Get the rest of the title lines
  const titleLines = titleParts.filter(
    (part) =>
      !(
        typeof part.text === "string" &&
        part.text.includes("project startup")
      )
  );

  // Parse the submit pitch section
  const submitPitchParts = parseStrapiRichText(data?.SubmitPitch);

  // The last part is the highlighted one (with .span or .code)
  const lastPitch = submitPitchParts.find((part) => part.span);

  return (
    <BackgroundBlock>
      <div className="text-center pb-12">
        <span className="text-[18px] tracking-[.02em] text-[#EEECDE] font-semibold font-Archivo mb-4 uppercase">
          {shortText}
        </span>
        <h2 className="text-[66px] text-[#EEECDE] uppercase leading-[113%]">
          {titleLines[0]?.text || "If you have"}
        </h2>
        <div
          className="flex gap-4 [&>span]:bg-[#E9F5AC] [&>span]:text-[66px] [&>span]:text-[#16363D] [&>span]:leading-[100%] \
        [&>span]:p-1 [&>span]:rounded-[3px] [&>span]:uppercase [&>span]:inline-block [&>span]:align-top [&>span]:font-Anton whitespace-nowrap"
        >
          {projectWords.map((word, idx) => (
            <span key={idx}>{word}</span>
          ))}
        </div>
        <h2 className="text-[66px] text-[#EEECDE] uppercase leading-[113%]">
          {titleLines
            .slice(1)
            .map((part, idx) => (
              <React.Fragment key={idx}>
                {part.text}
                {part.br && <br />}
              </React.Fragment>
            ))}
        </h2>
      </div>
      <div className="pt-12 flex flex-col items-center gap-4 border-t-[1px] border-[rgba(238,236,222,.15)] text-center">
        {submitPitchParts
          .filter((part) => !part.span)
          .map((part, idx) => (
            <p
              key={idx}
              className="text-[22px] font-medium text-[#EEECDE] tracking-[.02em] leading-[120%]"
            >
              {part.text}
            </p>
          ))}
        {lastPitch && (
          <p className="bg-[#E9F5AC] rounded-[4px] p-1 text-[22px] leading-[120%] text-[#16363D] font-Archivo tracking-[.02em] font-medium inline-block align-top">
            {lastPitch.text}
          </p>
        )}
      </div>
    </BackgroundBlock>
  );
};

export default ApplyIdea;
