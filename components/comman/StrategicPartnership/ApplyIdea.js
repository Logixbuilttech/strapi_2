import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";

const ApplyIdea = () => {
  return (
    <BackgroundBlock>
      <div className="text-center pb-12">
        <span className="text-[18px] tracking-[.02em] text-[#EEECDE] font-semibold font-Archivo mb-4 uppercase">
          Apply or Pitch Your Idea
        </span>
        <h2 className="text-[66px] text-[#EEECDE] uppercase leading-[113%]">
          If you have
        </h2>
        <div
          className="flex gap-4 [&>span]:bg-[#E9F5AC] [&>span]:text-[66px] [&>span]:text-[#16363D] [&>span]:leading-[100%] 
        [&>span]:p-1 [&>span]:rounded-[3px] [&>span]:uppercase [&>span]:inline-block [&>span]:align-top [&>span]:font-Anton whitespace-nowrap"
        >
          <span>project</span>
          <span>startup</span>
          <span>small business</span>
          <span>big ideas</span>
          <span>project</span>
          <span>startup</span>
        </div>
        <h2 className="text-[66px] text-[#EEECDE] uppercase leading-[113%]">
          that aligns with our vision <br /> we'd love to hear from you.
        </h2>
      </div>
      <div className="pt-12 flex flex-col items-center gap-4 border-t-[1px] border-[rgba(238,236,222,.15)] text-center">
        <p className="text-[22px] font-medium text-[#EEECDE] tracking-[.02em] leading-[120%]">
          Submit your pitch using the form below.
        </p>
        <p className="text-[22px] font-medium text-[#EEECDE] tracking-[.02em] leading-[120%]">
          Tell us what you’re building, what you need, and how you envision
          <br />
          partnership helping you grow.
        </p>
        <p className="bg-[#E9F5AC] rounded-[4px] p-1 text-[22px] leading-[120%] text-[#16363D] font-Archivo tracking-[.02em] font-medium inline-block align-top">
          We’re not looking for perfection — we’re looking for passion, purpose,
          and potential
        </p>
      </div>
    </BackgroundBlock>
  );
};

export default ApplyIdea;
