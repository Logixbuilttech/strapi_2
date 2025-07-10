"use client";

import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
import TextInput from "../TextInput";
import Textarea from "../Textarea";
import RadioButton from "../RadioButton";
// import CheckboxInput from "@/components/comman/CheckboxInput";

const ApplicationForm = () => {
  return (
    <BackgroundBlock>
      <Container>
        <div className="flex pb-[64px]">
          <span className="w-1/2 text-[#EEECDE] text-[18px] tracking-[.02em] leading-[100%] font-semibold !font-Archivo uppercase">
            Let’s start with your vision
          </span>
          <h2 className="w-1/2 text-[#EEECDE] text-[66px] uppercase leading-[113%]">
            Ready to Build the <br /> Future Together?
          </h2>
        </div>
        <div className="bg-[#EEECDE] rounded-[16px] p-10">
          <h2 className="text-[48px] text-[#16363D] leading-[113%] uppercase mb-[30px] block text-center">
            Strategic Partnership Application
          </h2>
          <form>
            <div className="grid gap-3 grid-cols-2 pb-3">
              <TextInput placeholder="Full Name" />
              <TextInput placeholder="Business or Project Name (if applicable)" />
              <TextInput placeholder="Email Address" />
              <TextInput placeholder="xxx xx xx" />
            </div>
            <div className="pb-[30px]">
              <TextInput placeholder="Website or Portfolio Link (optional)" />
            </div>
            <div className="grid gap-6 mb-[30px]">
              <h4 className="text-[#16363D] font-medium text-[22px] leading-[120%] tracking-[-.03em] !font-Archivo">
                Industry Focus
              </h4>
              <div className="flex gap-3">
                {/* <CheckboxInput id="Agriculture" label="Agriculture" /> */}
                {/* <CheckBoxInput id="Tourism" label="Tourism" />
                <CheckBoxInput id="Tech" label="Tech" />
                <CheckBoxInput id="Energy" label="Energy" />
                <CheckBoxInput id="Other" label="Other" /> */}
              </div>
            </div>
            <div className="mb-[30px]">
              <Textarea placeholder="Describe Your Project or Business" />
            </div>
            <div className="grid gap-6 mb-[30px]">
              <h4 className="text-[#16363D] font-medium text-[22px] leading-[120%] tracking-[-.03em] !font-Archivo">
                What Support Are You Seeking?
              </h4>
              <div className="flex gap-3 flex-wrap">
                <RadioButton
                  name="SeekingSupport"
                  id="Investment"
                  label="Investment"
                />
                <RadioButton
                  name="SeekingSupport"
                  id="Technology"
                  label="Technology"
                />
                <RadioButton
                  name="SeekingSupport"
                  id="Development"
                  label="Development"
                />
                <RadioButton
                  name="SeekingSupport"
                  id="Developments"
                  label="Developments"
                />
                <RadioButton
                  name="SeekingSupport"
                  id="Co-Building"
                  label="Co-Building"
                />
                <RadioButton name="SeekingSupport" id="Others" label="Others" />
              </div>
            </div>
            <div className="mb-[30px]">
              <Textarea placeholder="Why Do You Want to Partner with RenewEdge-Solutions?" />
            </div>
            <div className="w-full">
              <button
                className="bg-[#16363D] border-1 border-[#16363D] text-[18px] text-[#EEECDE] font-semibold 
              tracking-[.02em] uppercase leading-[100%] block rounded-full w-full p-5"
              >
                Submit Your Pitch
              </button>
            </div>
          </form>
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default ApplicationForm;
