import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Navbar } from './Navigation';



function Hero() {
  return (
    <section className="bg-[#191919] relative overflow-hidden">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-96px)] md:min-h-[600px] lg:min-h-[calc(100vh-96px)] py-12 md:py-16 lg:py-0">
          
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left max-w-[398px] mx-auto lg:mx-0 order-2 lg:order-1">
            <p className="text-white/40 text-[14px] tracking-[10px] font-normal mb-4 md:mb-6 uppercase">
              NEW PRODUCT
            </p>
            
            <h1 className="text-white text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] font-bold tracking-[1.29px] md:tracking-[2px] mb-6 uppercase">
              XX99 MARK II<br />HEADPHONES
            </h1>
            
            <p className="text-white/75 text-[15px] leading-[25px] font-medium mb-7 md:mb-10 max-w-[349px] mx-auto lg:mx-0">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            
            <a 
              href="/product/xx99-mark-two-headphones"
              className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase"
            >
              SEE PRODUCT
            </a>
          </div>

          {/* Image - Responsive positioning */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Mobile & Tablet - Centered */}
            <div className="w-full max-w-[320px] md:max-w-[450px] lg:max-w-none aspect-square lg:aspect-auto lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[600px] lg:h-[600px] flex items-center justify-center">
              {/* Placeholder - Replace with actual image */}
                  <img src="/assets/home/desktop/image-hero.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Decorative gradient overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent lg:hidden pointer-events-none"></div>
    </section>
  );
}

// Main Header Component combining Navbar and Hero
export default function Header() {
  return (
    <header>
      <Hero />
    </header>
  );
}

// Export individual components if needed elsewhere
export { Hero };