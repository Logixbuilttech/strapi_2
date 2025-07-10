"use client"
import React from "react";
import Image from "next/image";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import Container from "@/components/comman/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WhatWeDo = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full max-w-[1360px] px-6 m-auto">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Array.isArray(data.Item) &&
          data.Item.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="bg-[rgba(255,255,255,.07)] p-6 rounded-[16px] flex justify-between items-center flex-col text-center
                min-w-[300px] md:min-w-[334px] lg:min-w-[429px] w-[300px] md:w-[334px] lg:w-[429px] h-[342px] lg:h-[412px]"
              >
                <h3 className="text-[#EEECDE] text-[24px] md:text-[28px] leading-[113%] uppercase">
                  {item.title}
                </h3>
                <span className="bg-[rgba(255,255,255,.07)] rounded-[8px] flex items-center justify-center p-2.5">
                  {item.icon && item.icon.url && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.icon.url}`}
                      alt={item.title}
                      width={item.icon.width || 40}
                      height={item.icon.height || 40}
                    />
                  )}
                </span>
                <p className="text-[#EEECDE] text-[14px] md:text-[18px] lg:text-[22px] leading-[120%] tracking-[0.03em]">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default WhatWeDo;
