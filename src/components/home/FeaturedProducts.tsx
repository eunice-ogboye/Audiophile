"use client";

import React from 'react';
import Link from 'next/link';

function ZX9Speaker() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 mb-8 md:mb-12 lg:mb-12">
      <div className="bg-[#D87D4A] rounded-lg overflow-hidden relative">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-1/2 md:left-1/4 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-[558px] h-[558px] border border-white/10 rounded-full hidden md:block"></div>
        <div className="absolute top-0 left-1/2 md:left-1/4 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-[672px] h-[672px] border border-white/10 rounded-full hidden md:block"></div>
        <div className="absolute top-0 left-1/2 md:left-1/4 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-[786px] h-[786px] border border-white/10 rounded-full hidden md:block"></div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-0 items-center py-14 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24">
          {/* Image */}
          <div className="flex justify-center relative z-10">
            <div className="w-[172px] h-[207px] md:w-[198px] md:h-[237px] lg:w-[410px] lg:h-[493px] bg-gray-300/20 rounded-lg flex items-center justify-center">
              <span className="text-white/30 text-sm">ZX9 Speaker Image</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-white text-center md:text-left relative z-10 max-w-[349px] mx-auto md:mx-0">
            <h2 className="text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] font-bold tracking-[1.29px] md:tracking-[2px] mb-6 uppercase">
              ZX9<br />SPEAKER
            </h2>
            <p className="text-white/75 text-[15px] leading-[25px] mb-6 md:mb-10">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link
              href="/product/zx9-speaker"
              className="inline-block bg-[#000000] hover:bg-[#4C4C4C] text-white text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ZX7Speaker() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 mb-8 md:mb-12 lg:mb-12">
      <div className="bg-gray-200 rounded-lg overflow-hidden relative h-[320px] flex items-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200 opacity-50">
          <span className="sr-only">ZX7 Speaker Background Image</span>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24">
          <h2 className="text-[28px] font-bold tracking-[2px] mb-8 uppercase">
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
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 mb-[120px] md:mb-[96px] lg:mb-[200px]">
      <div className="grid md:grid-cols-2 gap-6 md:gap-[11px] lg:gap-[30px]">
        {/* Image */}
        <div className="bg-gray-300 rounded-lg h-[200px] md:h-[320px] flex items-center justify-center overflow-hidden">
          <span className="text-gray-500">YX1 Earphones Image</span>
        </div>

        {/* Content */}
        <div className="bg-[#F1F1F1] rounded-lg h-[200px] md:h-[320px] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <h2 className="text-[28px] font-bold tracking-[2px] mb-8 uppercase">
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