import Image from "next/image";
import Container from "@/components/comman/Container";
import HeroText from "../HeroText";
import LogoIcon from "@/public/images/LogoIcon.svg";
import PencilShape from "@/public/images/PencilShape.svg";
import Button from "@/components/comman/Button";

const heroParts = [
  { span: true, text: "smart" },
  { text: " Technology. " },
  { span: true, text: "Strategic" },
  { br: true },
  { text: "Solutions. " },
  { span: true, text: "Sustainable" },
  { text: " Growth. " },
];

const WhatWeDoHero = () => {
  return (
    <section className="headBG">
      {/* <div className="headBG-Bottam"></div> */}
      <div className="relative z-10">
        <HeroText heroParts={heroParts} className="pb-12 lg:pb-[64px]" />
      </div>
    </section>
  );
};

export default WhatWeDoHero;
