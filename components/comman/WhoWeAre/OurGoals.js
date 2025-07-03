import Image from "next/image";
import Container from "@/components/comman/Container";
import BackgroundBlock from "@/components/comman/BackgroundBlock";

const OurGoalsList = [
  {
    id: 1,
    heading: (
      <>
        Empower businesses and organizations <br /> with smarter, scalable
        technology
      </>
    ),
  },
  {
    id: 2,
    heading: (
      <>
        Bridge the gap between innovation <br /> and real-world application
      </>
    ),
  },
  {
    id: 3,
    heading: (
      <>
        Invest in partnerships that foster sustainable <br /> growth and
        community development
      </>
    ),
  },
  {
    id: 4,
    heading: (
      <>
        Continuously evolve to meet the needs <br /> of an ever-changing world
      </>
    ),
  },
];

const OurGoals = () => {
  return (
    <BackgroundBlock>
      <div className="grid gap-4 text-center px-5 pb-[48px] border-b-[1px] border-[rgba(238,236,222,.15)]">
        <p className="uppercase text-[18px] font-semibold leading-[100%] tracking-[.02em]">
          Our goals reflect our ambition to drive real change:
        </p>
        <h2 className="text-[66px] text-white leading-[113%] uppercase">
          Building a Smarter, <br /> More Connected World
        </h2>
      </div>
      <Container>
        <div className="grid gap-[96px] text-center pt-[96px]">
          {OurGoalsList.map((goal) => (
            <div key={goal.id} className="grid gap-4">
              <small className="text-[rgba(238,236,222,.3)] text-[18px] tracking-[.02em] font-semibold leading-[100%] uppercase">
                Our Goals 0{goal.id}
              </small>
              <h4 className="text-[48px] uppercase leading-[113%] font-Anton">
                {goal.heading}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default OurGoals;
