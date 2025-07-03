import React from "react";
import Button from "@/components/comman/Button";

const HeroText = ({
  heroParts = [],
  smallText,
  showButton = false,
  buttonText = "Discover More",
  onButtonClick,
  className = "",
  smallTextIsHtml = true,
}) => {
  const renderSmallText = () => {
    if (!smallText) return null;

    if (smallTextIsHtml) {
      return (
        <p
          className="font-medium leading-[120%] tracking-[-0.02em] text-[14px] md:text-[18px] lg:text-[22px] text-[#EEECDE]"
          dangerouslySetInnerHTML={{ __html: smallText }}
        />
      );
    } else {
      const lines = smallText.split("\n");
      return (
        <p className="font-medium leading-[120%] tracking-[-0.02em] text-[14px] md:text-[18px] lg:text-[22px] text-[#EEECDE]">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    }
  };

  return (
    <div>
      <h2 className="uppercase text-[38px] md:text-[56px] lg:text-[94px] leading-[108%] text-center pt-[112px] md:pt-[152px] lg:pt-[208px] pb-[30px] md:pb-10 lg:pb-12">
        {heroParts.map((part, index) => {
          if (part.br) {
            return <br key={index} />;
          } else if (part.span) {
            return (
              <span
                className="bg-[rgba(233,245,172,1)] text-[rgba(22,54,61,1)] inline-block align-top leading-[100%] rounded-[3px] px-1"
                key={index}
              >
                {part.text}
              </span>
            );
          } else {
            return <React.Fragment key={index}>{part.text}</React.Fragment>;
          }
        })}
      </h2>

      {(smallText || showButton) && (
        <div
          className={`border-t-[1px] border-[rgba(238,236,222,.15)] pt-[30px] md:pt-10 lg:pt-12 ${className}`}
        >
          <div className="justify-center grid text-center">
            {renderSmallText()}
            {showButton && (
              <div className="pt-9 md:pt-12 lg:pt-[52px]">
                <Button
                  label={buttonText}
                  color="light"
                  onClick={onButtonClick}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroText;
