import Button from "@/components/comman/Button";
import Container from "@/components/comman/Container";

const Custom404 = () => {
  return (
    <>
      <div className="h-[870px] relative animated-text">
        <h4 className="mt-[-55px] flex pb-5">
          <span className="text-[#E9F5AC] flex">4</span>
          <span className="text-[#D2E7D3]">
            error 404error 404 error 404error 404error 404
          </span>
        </h4>
        <h4 className="textShow flex justify-center text-center">
          <span className="blueNone text-[#D2E7D3]">error 404</span>
        </h4>
        <h4 className="flex">
          <span className="text-[#D2E7D3] flex">
            4error 404error 404 error 404error 404error 404
          </span>
        </h4>
        <h4 className="flex">
          <span className="text-[#D2E7D3]">4</span>
          <span className="text-[#E9F5AC] flex">
            error 404error 404 error 404error 404error 404
          </span>
        </h4>
      </div>
      {/* <Container>
        <div className="errorDiv absolute top-[214px]">
          <h3 className="bg-[#16363D] inline-block text-[290px] text-[#D2E7D3] leading-[.9] tracking-[.06em] uppercase whitespace-nowrap">
            error 404
          </h3>
          <div className=" w-1/2 grid gap-12 ml-auto pt-16">
            <h4 className="text-[#D2E7D3] text-[28px] leading-[113%]">
              THIS PAGE DOES NOT EXIST, <br /> DON'T WORRY
            </h4>
            <Button label="BACK TO HOMEPAGE" align="left"></Button>
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default Custom404;
