import React from "react";

const CenterTitle = ({ SmallTitle, Title }) => {
  return (
    <div className="text-center pb-[64px] grid gap-4">
      <p className="text-[#16363D] text-[18px] tracking-[.02em] font-Archivo font-semibold leading-[100%] uppercase">
        {SmallTitle}
      </p>
      <h3 className="text-[66px] leading-[113%] uppercase text-[#16363D]">
        {Title}
      </h3>
    </div>
  );
};

export default CenterTitle;
