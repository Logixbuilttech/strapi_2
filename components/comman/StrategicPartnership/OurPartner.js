import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
import partnersIcon01 from "@/public/images/partnersIcon-01.svg";
import partnersIcon02 from "@/public/images/partnersIcon-02.svg";
import partnersIcon03 from "@/public/images/partnersIcon-03.svg";
import partnersIcon04 from "@/public/images/partnersIcon-04.svg";
import partnersIcon05 from "@/public/images/partnersIcon-05.svg";
import Image from "next/image";

const OurPartners = [
  {
    id: 1,
    label: (
      <>
        Strategic advisory <br /> and mentorship
      </>
    ),
    IMG: partnersIcon01,
  },
  {
    id: 2,
    label: (
      <>
        Technology development <br /> and infrastructure support
      </>
    ),
    IMG: partnersIcon02,
  },
  {
    id: 3,
    label: (
      <>
        Co-investment <br /> opportunities
      </>
    ),
    IMG: partnersIcon03,
  },
  {
    id: 4,
    label: (
      <>
        Joint ventures and co-building <br /> new businesses
      </>
    ),
    IMG: partnersIcon04,
  },
  {
    id: 5,
    label: (
      <>
        Market expansion support in <br /> Dominica and the Caribbean region
      </>
    ),
    IMG: partnersIcon05,
  },
];

const OurPartner = () => {
  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <div className="flex pb-[64px]">
          <span className="w-1/2 text-[#16363D] text-[18px] tracking-[.02em] leading-[100%] font-semibold !font-Archivo">
            What Partnership Looks Like with Us
          </span>
          <h2 className="w-1/2 text-[#16363D] text-[66px] uppercase leading-[113%]">
            Our partnerships <br /> may take the form of
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {OurPartners.slice(0, 3).map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center text-center bg-[#16363D] rounded-[16px] h-[260px] justify-between p-6"
              >
                <span className="bg-[rgba(255,255,255,.1)] rounded-[8px] w-[64px] h-[64px] mx-auto flex items-center justify-center">
                  <Image width={34} height={34} src={partner.IMG} alt="" />
                </span>
                <h3 className="text-[28px] text-[#EEECDE] leading-[113%] uppercase">
                  {partner.label}
                </h3>
              </div>
            ))}
          </div>

          {/* Second row: 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {OurPartners.slice(3).map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center text-center bg-[#16363D] rounded-[16px] h-[260px] justify-between p-6"
              >
                <span className="bg-[rgba(255,255,255,.1)] rounded-[8px] w-[64px] h-[64px] mx-auto flex items-center justify-center">
                  <Image width={34} height={34} src={partner.IMG} alt="" />
                </span>
                <h3 className="text-[28px] text-[#EEECDE] leading-[113%] uppercase">
                  {partner.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default OurPartner;
