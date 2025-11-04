"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  className?: string;
}

function Hero({ className = '' }: HeroProps) {
  return (
    <section className={`bg-[#191919] relative overflow-hidden ${className}`}>
   
   <div>
      <Image
      src="/assets/home/desktop/image-hero.jpg"
      alt="Hero background"
      fill
      className="object-cover hidden md:block"
    />
    <Image
      src="/assets/home/tablet/image-header.jpg"
      alt="Hero background"
      fill
      className="object-cover hidden sm:block md:hidden"
    />
    <Image
      src="/assets/home/mobile/image-header.jpg"
      alt="Hero background"
      fill
      className="object-cover sm:hidden"
    />

</div>



      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 relative">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-96px)] md:min-h-[600px] lg:min-h-[650px] py-28 md:py-32 lg:py-0">
          
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left max-w-[398px] mx-auto lg:mx-0">
            <p className="text-white/40 text-[14px] tracking-[10px] font-normal mb-6 uppercase">
              NEW PRODUCT
            </p>
            
            <h1 className="text-white text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] font-bold tracking-[1.29px] md:tracking-[2px] mb-6 uppercase">
              XX99 MARK II<br />HEADPHONES
            </h1>
            
            <p className="text-white/75 text-[15px] leading-[25px] font-medium mb-7 md:mb-10 max-w-[349px] mx-auto lg:mx-0">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            
            <Link 
              href="/product/xx99-mark-two-headphones"
              className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase"
            >
              SEE PRODUCT
            </Link>
          </div>

          
        </div>
      </div>

      {/* Mobile gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/60 to-transparent lg:hidden pointer-events-none z-[1]"></div>
    </section>
  );
}


interface HeaderProps {
  showHero?: boolean;
  className?: string;
}

export default function Header({ showHero = true, className = '' }: HeaderProps) {
  if (!showHero) {
    return null;
  }

  return (
    <header className={className}>
      <Hero />
    </header>
  );
}


export { Hero };
export type { HeroProps, HeaderProps };
