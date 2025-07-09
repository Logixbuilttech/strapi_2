import { fetchStrapi } from "@/lib/strapiApi.js";
import { PrivacyPolicyPopulate } from "@/lib/populateMap.js";
import HomeHero from "@/components/comman/Home/HomeHero.js";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import Container from "@/components/comman/Container";
import SectionBlock from "@/components/comman/SectionBlock";

export const revalidate = 3600;

export default async function PrivacyPolicy() {
  const PrivacyPolicyData = await fetchStrapi("privacy-policy", {
    populate: PrivacyPolicyPopulate.populate,
    tag: "privacy-policy",
    revalidate,
  });

  // Helper to parse Strapi rich text to a single string (for title)
  function parseRichTextToString(richText) {
    return richText
      .map(block => (block.children ? block.children.map(child => child.text).join('') : ''))
      .join(' ')
      .trim();
  }

  // Helper to parse Strapi rich text to array of paragraphs (for DescriptionText)
  function parseRichTextToParagraphs(richText) {
    return richText
      .map(block => (block.children ? block.children.map(child => child.text).join('') : ''))
      .filter(text => text.trim() !== '');
  }

  const blocks = PrivacyPolicyData.PrivacyPolicy || [];
  console.log("🚀 ~ PrivacyPolicy ~ blocks:", JSON.stringify(blocks))

  return (
    <>
      {blocks.map((b, index) => {
        switch (b.__component) {
          case "layout.hero":
            return <HomeHero key={b.id} data={b} />;
          case "layout.privacy-policy":
            return (
              <BackgroundBlock variant="lightBG" key={b.id}>
                <Container>
                  {b.PrivacyPolicy && b.PrivacyPolicy.map((policy, idx) => (
                    <SectionBlock
                      key={policy.id}
                      badgeNumber={idx + 1}
                      heading={parseRichTextToString(policy.Title)}
                      DescriptionText={parseRichTextToParagraphs(policy.Info)}
                    />
                  ))}
                </Container>
              </BackgroundBlock>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
