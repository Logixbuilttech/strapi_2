import HeroText from "../HeroText";

const heroParts = [
  { text: "Empowering Smarter" },
  { br: true },
  { text: "Growth Through " },
  { span: true, text: "Technology" },
  { br: true },
  { span: true, text: "Design" },
  { text: " and Digital " },
  { span: true, text: "Innovation " },
];

const smallText =
  "RenewEdge-Solutions is a technology, design, and digital solutions <br/> company helping people and organizations solve problems, simplify <br/> systems, and scale smarter";

const HomeHero = () => {
  return (
    <section className="headBG">
      <div className="headBG-Bottam"></div>
      <div className="relative z-10">
        <HeroText
          heroParts={heroParts}
          smallText={smallText}
          showButton={true}
          buttonText="Learn about us"
          onButtonClick={() => console.log("Button clicked!")}
          className="pb-[84px] md:pb-[92px] lg:pb-[116px]"
        />
      </div>
    </section>
  );
};

export default HomeHero;
