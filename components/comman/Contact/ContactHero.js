import HeroText from "../HeroText";
import ContactForm from "./ContactForm";

const heroParts = [
  { text: "hey" },
  { br: true },
  { span: true, text: "Let's Talk" },
];

const smallText =
  "Fill out the form and we’ll be in touch shortly or feel free to reach us through your preferred channel.";

const ContactHero = () => {
  return (
    <section className="headBG">
      {/* <div className="headBG-Bottam"></div> */}
      <div className="relative z-10">
        <HeroText
          heroParts={heroParts}
          smallText={smallText}
          className="pb-12 lg:pb-[64px]"
        />
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactHero;
