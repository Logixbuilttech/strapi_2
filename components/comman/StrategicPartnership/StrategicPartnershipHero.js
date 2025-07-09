import Image from "next/image";
import Container from "@/components/comman/Container";
import HeroText from "../HeroText";
import LogoIcon from "@/public/images/LogoIcon.svg";
import PencilShape from "@/public/images/PencilShape.svg";
import Button from "@/components/comman/Button";

const heroParts = [
  { text: " Build Smarter " },
  { br: true },
  { span: true, text: "Futures Together" },
];

const smallText =
  " At RenewEdge-Solutions, we believe that the right technology, combined <br/> with clear strategy and design, can solve real-world problems, drive new <br/> opportunities, and fuel long-term growth.";

const StrategicPartnershipHero = () => {
  return (
    <section className="headBG">
      {/* <div className="headBG-Bottam"></div> */}
      <div className="relative z-10 pb-10 md:pb-12 lg:pb-[68px]">
        <HeroText
          heading5="Partner with RenewEdge-Solutions"
          heroParts={heroParts}
          className="pb-66 md:pb-76 lg:pb-[109px]"
        />
      </div>
    </section>
  );
};

export default StrategicPartnershipHero;
