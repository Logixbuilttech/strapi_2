"use client";
import React from "react";
import Link from "next/link";
import Container from "@/components/comman/Container";
import Image from "next/image";
import Button from "@/components/comman/Button";
import { usePathname } from "next/navigation";
import { parseStrapiRichText } from "@/lib/parseStrapiRichText";

// Helper for rich text rendering
function renderRichText(parts) {
  if (!Array.isArray(parts)) {
    if (typeof parts === "string") return parts;
    return null;
  }
  return parts.map((part, idx) => {
    if (part.br) return <br key={idx} />;
    if (part.span) return <span className="highlight" key={idx}>{part.text}</span>;
    return <React.Fragment key={idx}>{part.text}</React.Fragment>;
  });
}

const Footer = ({ FooterData }) => {
  const pathname = usePathname();
  const showTopBorder =
    pathname === "/privacypolicy" || pathname === "/thinkforward";

  // Dynamic data
  const brandName = renderRichText(parseStrapiRichText(FooterData?.Name));
  const location = renderRichText(parseStrapiRichText(FooterData?.location));
  const button = FooterData?.Start_journey;
  const social = FooterData?.FooterSocial?.Link || [];
  const nav = FooterData?.FooterNavigation?.Link || [];
  const privacy = FooterData?.PrivacyPolicy;

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
                {FooterData?.customization_prompt}
              </p>
              <div className="sm:hidden block">
                {button && (
                  <Button
                    align="left"
                    label={button.text}
                    variant="outline"
                    size="sm"
                    color="dark"
                    href={button.href}
                  />
                )}
              </div>
              <div className="hidden sm:block">
                {button && (
                  <Button
                    align="left"
                    label={button.text}
                    variant="outline"
                    size="sm"
                    color="dark"
                    href={button.href}
                  />
                )}
              </div>
            </div>
            <div className="gap-[30px] sm:gap-[70px] lg:gap-0 lg:w-1/2 flex sm:justify-between flex-wrap">
              <div className="lg:w-1/2 lg:hidden order-[3] sm:order-none w-full sm:w-fit">
                <h2 className="text-[#16363D] text-[38px] sm:text-[44px] font-Anton sm:leading-[113%] leading-[100%] uppercase">
                  {brandName}
                </h2>
              </div>
              <div className="ml-[57px] sm:ml-auto lg:m-0 flex flex-col justify-between gap-5 sm:gap-3 order-[2] sm:order-none">
                <div className="flex gap-3 flex-col">
                  <p className="font-Archivo uppercase text-[rgba(22,54,61,.6)] font-semibold text-[14px] leading-[100%]">
                    {FooterData?.FooterSocial?.Title || "social"}
                  </p>
                  <div className="flex gap-3">
                    {social.map((item) => (
                      <Link key={item.id} href={item.url}>
                        {item.platform_icon && item.platform_icon.url && (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.platform_icon.url}`}
                            alt={item.platform_name}
                            width={item.platform_icon.width || 24}
                            height={item.platform_icon.height || 24}
                          />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 flex-col">
                  <p className="font-Archivo uppercase text-[rgba(22,54,61,.6)] font-semibold text-[14px] leading-[100%]">
                    location
                  </p>
                  <ul>
                    <li className="leading-[100%]">
                      <span className="text-[16px] text-[#16363D] tracking-[-0.02em] leading-[100%] font-Archivo font-medium">
                        {location}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-5 sm:gap-3 order-[1] sm:order-none">
                <p className="font-Archivo uppercase text-[rgba(22,54,61,.6)] font-semibold text-[14px] block leading-[100%]">
                  {FooterData?.FooterNavigation?.Title || "navigation"}
                </p>
                <ul className="grid gap-3 sm:gap-2">
                  {nav.map((item) => (
                    <li key={item.id} className="leading-[100%]">
                      <Link
                        href={item.href}
                        className="text-[14px] sm:text-[16px] text-[#16363D] tracking-[-0.02em] leading-[100%] font-Archivo font-medium"
                      >
                        {item.Name}
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
                {brandName}
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex justify-between items-center">
              <p className="text-[14px] text-[rgba(22,54,61,.4)] leading-[120%] font-medium tracking-[-0.02em]">
              {FooterData?.RenewEdge || "RenewEdge Solutions"} {new Date().getFullYear()}
              </p>
              {privacy && (
                <Link
                  className="text-[14px] text-[rgba(22,54,61,.4)] leading-[120%] font-medium tracking-[-0.02em]"
                  href={privacy.href}
                >
                  {privacy.Name}
                </Link>
              )}
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
