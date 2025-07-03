"use client";

import { useState, useMemo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import BackgroundBlock from "@/components/comman/BackgroundBlock";
import Container from "@/components/comman/Container";

import gallery01 from "@/public/images/gallery/01.jpg";
import gallery02 from "@/public/images/gallery/02.jpg";
import gallery03 from "@/public/images/gallery/03.jpg";
import gallery04 from "@/public/images/gallery/04.jpg";
import gallery05 from "@/public/images/gallery/05.jpg";
import gallery06 from "@/public/images/gallery/06.jpg";
import gallery07 from "@/public/images/gallery/07.jpg";
import gallery08 from "@/public/images/gallery/08.jpg";
import gallery09 from "@/public/images/gallery/09.jpg";
import gallery10 from "@/public/images/gallery/10.jpg";
import gallery11 from "@/public/images/gallery/11.jpg";
import gallery12 from "@/public/images/gallery/12.jpg";
import Image from "next/image";
import Button from "@/components/comman/Button";

const ALL_IMAGES = [
  {
    id: "1",
    src: gallery01,
    category: "all",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "2",
    src: gallery02,
    category: "Tech",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "3",
    src: gallery03,
    category: "Agriculture",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "4",
    src: gallery04,
    category: "Tourism",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "5",
    src: gallery05,
    category: "Energy",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "6",
    src: gallery06,
    category: "Energy",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "7",
    src: gallery07,
    category: "Other",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "8",
    src: gallery08,
    category: "Tech",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "9",
    src: gallery09,
    category: "Agriculture",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "10",
    src: gallery10,
    category: "Tourism",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "11",
    src: gallery11,
    category: "Energy",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
  {
    id: "12",
    src: gallery12,
    category: "Other",
    text: "Open the portal to success.* Achieve financial nirvana.** WIN *** BIG TALK helps you uncover the big ideas that will transform the very essence of your existence.",
  },
];

const CATEGORIES = ["All", "Tech", "Agriculture", "Tourism", "Energy", "Other"];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const images = useMemo(
    () => ALL_IMAGES.filter((i) => active === "All" || i.category === active),
    [active]
  );

  return (
    <BackgroundBlock variant="lightBG">
      <Container>
        <div className="grid gap-[58px]">
          <nav className="flex gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`cursor-pointer transition px-[30px] py-[19px] border-[2px] border-[rgba(22,54,61,.6)] uppercase text-[18px] font-Archivo tracking-[-.02em] leading-[100%]  whitespace-nowrap rounded-full font-semibold ${
                  active === cat
                    ? "bg-[#16363D] text-[#EEECDE]"
                    : "bg-[#EEECDE] text-[#16363D] hover:bg-[#16363D] hover:text-[#EEECDE]"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="w-full">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="12px">
                {images.map((img, i) => (
                  <div key={i} className="relative group rounded-[16px] overflow-hidden transition w-full">
                    <div class="absolute inset-0 transition before:content-[''] before:absolute before:inset-0 group-hover:before:bg-black/20"></div>
                    <Image
                      key={img.id}
                      src={img.src}
                      alt={img.category}
                      className="w-full"
                    />
                    <span
                      className="absolute top-6 left-6 text-[14px] text-white tracking-[.02em] leading-[100%] font-semibold font-Archivo uppercase
                    bg-[rgba(255,255,255,0.16)]  backdrop-sepia-[blur(67px)] px-4 py-[9px] rounded-full"
                    >
                      {img.category}
                    </span>
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 w-[calc(100%-48px)] grid gap-4 transition">
                      <Button label="Know More" align="left" color="dark" />
                      <p className="bg-[#EEECDE] py-6 px-8 text-[#16363D] rounded-[20px] text-[22px] font-medium font-Archivo leading-[120%] tracking-[.02em]">
                        {img.text}
                      </p>
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          <div className="">
            <Button label="show more" color="dark" />
          </div>
        </div>
      </Container>
    </BackgroundBlock>
  );
}
