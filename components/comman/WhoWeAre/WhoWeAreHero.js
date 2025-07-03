import Image from "next/image";
import Container from "@/components/comman/Container";
import HeroText from "../HeroText";
import LogoIcon from "@/public/images/LogoIcon.svg";
import PencilShape from "@/public/images/PencilShape.svg";
import Button from "@/components/comman/Button";

const heroParts = [
  { span: true, text: "Solving" },
  { text: " Problems." },
  { span: true, text: "Simplifying" },
  { br: true },
  { text: "Solutions." },
  { span: true, text: "Scaling" },
  { span: true, text: "Smarter." },
];

const smallText =
  " At RenewEdge-Solutions, we believe that the right technology, combined <br/> with clear strategy and design, can solve real-world problems, drive new <br/> opportunities, and fuel long-term growth.";

const WhoWeAreHero = () => {
  return (
    <section className="headBG">
      <div className="headBG-Bottam"></div>
      <div className="relative z-10">
        <HeroText heroParts={heroParts} smallText={smallText} />
      </div>
      <div className="pb-[116px] mt-[-20px]">
        <Container>
          <div className="bg-[rgba(255,255,255,.07)] border-[2px] border-[rgba(255,255,255,.1)] rounded-[16px] flex overflow-hidden z-10 relative">
            <div className="flex justify-between text-center w-1/2  flex-col py-10">
              <Image src={LogoIcon} alt="" className="mx-auto" />
              <p className="text-[22px] leading-[120%] tracking[-0.03em] text-[#EEECDE]">
                Founded on the principles of innovation, <br />
                excellence, and empowerment, we are committed <br />
                to delivering solutions that are smarter, simpler, and <br />
                more sustainable
              </p>
              <Button size="sm" label="get in touch " variant="outline" />
            </div>
            <div className="w-1/2 bg-[rgba(255,255,255,.08)] backdrop-sepia-[blur(37px)] flex justify-center items-center py-6">
              <Image src={PencilShape} alt="" className="align-top" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default WhoWeAreHero;
