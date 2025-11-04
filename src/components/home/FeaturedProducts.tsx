"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// ---------- ZX9 SPEAKER ----------
function ZX9Speaker() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 mb-[50px] md:mb-[30px]">
      <div className="relative bg-[#D87D4A] rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-[95px] py-[55px] md:py-[95px] text-center md:text-left">
        {/* Decorative Circles */}
        <div className="absolute top-[30px] md:right-[50%] ">
           <Image
            src="/assets/home/desktop/pattern-circles.svg"
            alt="ZX9 Speaker"
            width={410}
            height={493}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative z-10 flex justify-center mb-10 md:mb-0">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={410}
            height={493}
            className="w-[172px] md:w-[220px] lg:w-[410px] h-auto object-contain drop-shadow-xl"
            priority
          />
        </div>

        
        <div className="relative z-10 max-w-[349px] mx-auto md:mx-0 text-white">
          <h2 className="text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] font-bold tracking-[1.3px] md:tracking-[2px] mb-6 uppercase">
            ZX9 <br /> SPEAKER
          </h2>
          <p className="text-white/80 text-[15px] leading-[25px] mb-8 md:mb-10">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/product/zx9-speaker"
            className="inline-block bg-black hover:bg-[#4C4C4C] text-white text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}


function ZX7Speaker() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 mb-[50px] md:mb-[30px]">
      <div className="relative rounded-lg overflow-hidden flex items-center h-[320px] bg-[#F1F1F1]">
        {/* Background Image */}
        <Image
          src="/assets/home/desktop/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-[95px]">
          <h2 className="text-[28px] font-bold tracking-[2px] mb-8 uppercase text-black">
            ZX7 SPEAKER
          </h2>
          <Link
            href="/product/zx7-speaker"
            className="inline-block border-2 border-black hover:bg-black hover:text-white text-black text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}


function YX1Earphones() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 mb-[50px] md:mb-[30px]">
      <div className="grid md:grid-cols-2 gap-6 md:gap-[11px] lg:gap-[30px]">
        {/* Image */}
        <div className="relative h-[200px] md:h-[320px] rounded-lg overflow-hidden">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="bg-[#F1F1F1] rounded-lg h-[200px] md:h-[320px] flex flex-col justify-center px-6 md:px-12 lg:px-[95px]">
          <h2 className="text-[28px] font-bold tracking-[2px] mb-8 uppercase text-black">
            YX1 EARPHONES
          </h2>
          <Link
            href="/product/yx1-earphones"
            className="inline-block border-2 border-black hover:bg-black hover:text-white text-black text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase w-fit"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FeaturedProducts() {
  return (
    <>
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </>
  );
}

export { ZX9Speaker, ZX7Speaker, YX1Earphones };
