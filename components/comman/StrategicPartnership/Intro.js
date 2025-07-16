import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
import SectionBlock from "../SectionBlock";

const Intro = ({ data }) => {
  console.log("🚀 ~ Intro ~ data:", data)
  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        {/* <SectionBlock
          className="!pb-0"
          title="Intro"
          heading="Partner for Progress"
          DescriptionText={[
            "If you’re an entrepreneur, innovator, or business leader seeking a growth partner who shares your vision — let’s connect.",
            "We’re open to investing in, partnering with, and co-developing businesses that are shaping tomorrow.",
          ]}
        /> */}
      </Container>
    </BackgroundBlock>
  );
};

export default Intro;
