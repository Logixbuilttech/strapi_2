import Image from "next/image";
import Container from "@/components/comman/Container";
import Button from "@/components/comman/Button";

const CardWithLogo = ({ data }) => {
  if (!data) return null;

  return (
    <section className="headBG">
      <div className="pb-[116px] mt-[-20px]">
        <Container>
          <div className="bg-[rgba(255,255,255,.07)] border-[2px] border-[rgba(255,255,255,.1)] rounded-[16px] flex overflow-hidden z-10 relative">
            <div className="flex justify-between text-center w-1/2 flex-col py-10">
              {data.Logo && data.Logo.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.Logo.url}`}
                  alt={data.Logo.alternativeText || ""}
                  width={data.Logo.width || 52}
                  height={data.Logo.height || 52}
                  className="mx-auto"
                />
              )}
              <p className="text-[22px] leading-[120%] tracking[-0.03em] text-[#EEECDE]">
                {data.Text}
              </p>
              {data.Button && data.Button.text && (
                <Button
                  size="sm"
                  label={data.Button.text}
                  variant="outline"
                  href={data.Button.href}
                />
              )}
            </div>
            <div className="w-1/2 bg-[rgba(255,255,255,.08)] backdrop-sepia-[blur(37px)] flex justify-center items-center py-6">
              {data.Image && data.Image.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.Image.url}`}
                  alt={data.Image.alternativeText || ""}
                  width={data.Image.width || 400}
                  height={data.Image.height || 300}
                  className="align-top"
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CardWithLogo;
