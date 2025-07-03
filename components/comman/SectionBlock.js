import React from "react";

const SectionBlock = ({
  title,
  badgeNumber,
  heading,
  DescriptionText = [],
}) => {
  return (
    <div className="pb-12 lg:pb-[64px]">
      <div className="flex pb-[30px] md:pb-10 lg:pb-[48px]">
        <div className="w-1/2">
          {title && (
            <p className="font-semibold text-[10px] md:text-[14px] lg:text-[18px] leading-[100%] w-1/2 text-[#16363D] uppercase tracking-[-0.02em]">
              {title}
            </p>
          )}

          {badgeNumber && (
            <div className="w-1/2">
              <p
                className="bg-[rgba(22,54,61,0.15)] w-[42px] h-[42px] flex items-center justify-center rounded-full
                text-[22px] font-medium font-Archivo tracking-[-0.02em] text-[#16363D]"
              >
                {badgeNumber}
              </p>
            </div>
          )}
        </div>

        <div className="w-1/2">
          <h3
            className="text-[30px] md:text-[44px] lg:text-[66px] leading-[113%] font-normal uppercase text-[#16363D]"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
      </div>

      <div
        className="relative pt-[48px] before:content-[''] before:bg-[rgba(22,54,61,.15)] before:absolute before:top-0 before:left-[-50%] 
        before:w-[200%] before:h-[1px]"
      >
        <div className="grid gap-4 w-1/2 ml-auto">
          {DescriptionText.map((text, index) => (
            <p
              key={index}
              className="text-[14px] md:text-[18px] lg:text-[22px] text-[#16363D] leading-[120%] tracking-[-0.02em]"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
