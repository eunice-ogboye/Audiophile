"use client";

import React from 'react';
import Image from 'next/image';

interface AudioGearSectionProps {
  className?: string;
}

export default function AudioGearSection({ className = '' }: AudioGearSectionProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 py-[120px] md:py-[96px] lg:py-[200px]">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-[125px] items-center">
          
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-[28px] md:text-[40px] leading-[38px] md:leading-[44px] font-bold tracking-[1px] md:tracking-[1.43px] mb-8 uppercase">
              BRINGING YOU THE{' '}
              <span className="text-[#D87D4A]">BEST</span>{' '}
              AUDIO GEAR
            </h2>
            
            <p className="text-black/50 text-[15px] leading-[25px] font-medium">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/assets/home/desktop/image-best-gear.png"
                alt="Person enjoying audio gear with headphones"
                width={540}
                height={588}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type { AudioGearSectionProps };