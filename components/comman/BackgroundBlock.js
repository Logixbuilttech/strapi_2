const BackgroundBlock = ({ children, variant = "primary", className = "" }) => {
  const backgroundColors = {
    primary: "#16363D",
    lightBG: "#EEECDE",
  };

  const backgroundColor = backgroundColors[variant] || backgroundColors.primary;

  return (
    <div
      className={`rounded-[16px_16px_0_0] pt-[64px] md:pt-[72px] lg:pt-[96px] pb-[84px] md:pb-[92px] lg:pb-[116px] -mt-[20px] z-10 relative overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
};

export default BackgroundBlock;
