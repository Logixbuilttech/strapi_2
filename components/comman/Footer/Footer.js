"use client";
import Link from "next/link";
import Container from "@/components/comman/Container";
import Image from "next/image";
import WhatUp from "@/public/images/WhatUp.svg";
import Facebook from "@/public/images/Facebook.svg";
import Button from "@/components/comman/Button";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname(); // ✅ Get current route
  const showTopBorder =
    pathname === "/privacypolicy" || pathname === "/thinkforward"; // ✅ Check route

  const NavFTR = [
    { id: 1, label: "Who We Are", link: "" },
    { id: 2, label: "What We Do", link: "" },
    { id: 3, label: "Insights", link: "" },
    { id: 4, label: "Partnership", link: "" },
    { id: 5, label: "Let's Talk", link: "" },
  ];
  return (
    <>
      <footer
        className={`z-10 relative bg-[#EEECDE] py-[64px_30px] md:py-[72px_40px] lg:py-[63px] rounded-[10px_10px_0_0] mt-[-20px] border-t-[2px] ${
          showTopBorder ? "border-[rgba(22,54,61,.2)]" : "border-[#EEECDE]"
        }`}
      >
        <Container>
          <div className="grid lg:flex gap-12 sm:gap-10 lg:gap-[60px] ">
            <div className="flex flex-col gap-4 w-full min-w-[1140px]:w-[460px] min-w-[1140px]:w-1/2">
              <p className="text-[14px] sm:text-[16px] text-[#16363D] tracking-[-0.02em] leading-[120%]">
                Need something custom? We’re built for that.
              </p>
              <div className="sm:hidden block">
                <Button
                  align="left"
                  label="Start Your Journey with us"
                  variant="outline"
                  size="sm"
                  color="dark"
                />
              </div>
              <div className="hidden sm:block">
                <Button
                  align="left"
                  label="Start Your Journey with RenewEdge-Solutions"
                  variant="outline"
                  size="sm"
                  color="dark"
                />
              </div>
            </div>
            <div className="gap-[30px] sm:gap-[70px] lg:gap-0 lg:w-1/2 flex sm:justify-between flex-wrap">
              <div className="lg:w-1/2 lg:hidden order-[3] sm:order-none w-full sm:w-fit">
                <h2 className="text-[#16363D] text-[38px] sm:text-[44px] font-Anton sm:leading-[113%] leading-[100%] uppercase">
                  RenewEdge <br /> Solutions
                </h2>
              </div>
              <div className="ml-[57px] sm:ml-auto lg:m-0 flex flex-col justify-between gap-5 sm:gap-3 order-[2] sm:order-none">
                <div className="flex gap-3 flex-col">
                  <p className="font-Archivo uppercase text-[rgba(22,54,61,.6)] font-semibold text-[14px] leading-[100%]">
                    social
                  </p>
                  <div className="flex gap-3">
                    <Link href="">
                      <Image src={Facebook} alt="" />{" "}
                    </Link>
                    <Link href="">
                      <Image src={WhatUp} alt="" />{" "}
                    </Link>
                  </div>
                </div>
                <div className="flex gap-3 flex-col">
                  <p className="font-Archivo uppercase text-[rgba(22,54,61,.6)] font-semibold text-[14px] leading-[100%]">
                    location
                  </p>
                  <ul className="">
                    <li className="leading-[100%]">
                      <Link
                        href=""
                        className="text-[16px] text-[#16363D] tracking-[-0.02em] leading-[100%] font-Archivo font-medium"
                      >
                        Roseau,
                      </Link>
                    </li>
                    <li className="leading-[100%]">
                      <Link
                        href=""
                        className="text-[16px] text-[#16363D] tracking-[-0.02em] leading-[100%] font-Archivo font-medium"
                      >
                        Dominica
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-5 sm:gap-3 order-[1] sm:order-none">
                <p className="font-Archivo uppercase text-[rgba(22,54,61,.6)] font-semibold text-[14px] block leading-[100%]">
                  navigation
                </p>
                <ul className="grid gap-3 sm:gap-2">
                  {NavFTR.map((item) => (
                    <li key={item.id} className="leading-[100%]">
                      <Link
                        href={item.link}
                        className="text-[14px] sm:text-[16px] text-[#16363D] tracking-[-0.02em] leading-[100%] font-Archivo font-medium"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-[60px] items-end mt-[30px] sm:mt-10 lg:-mt-4 w-full">
            <div className="w-1/2 hidden lg:block">
              <h2 className="text-[#16363D] text-[66px] font-Anton leading-[100%] uppercase">
                RenewEdge <br /> Solutions
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex justify-between items-center">
              <p className="text-[14px] text-[rgba(22,54,61,.4)] leading-[120%] font-medium tracking-[-0.02em]">
                RenewEdge Solutions 2025
              </p>
              <Link
                className="text-[14px] text-[rgba(22,54,61,.4)] leading-[120%] font-medium tracking-[-0.02em]"
                href=""
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
