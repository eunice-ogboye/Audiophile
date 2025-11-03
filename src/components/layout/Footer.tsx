"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0">
        {/* Orange top border */}
        <div className="h-1 w-[101px] bg-[#D87D4A] mx-auto md:mx-0"></div>

        <div className="pt-12 md:pt-14 lg:pt-[71px] pb-12">
          {/* Top Section - Logo and Navigation */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-8 lg:mb-9">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-white font-bold text-[25px] tracking-tight mb-12 md:mb-0 text-center md:text-left"
            >
              audiophile
            </Link>

            {/* Navigation */}
            <nav className="flex flex-col md:flex-row gap-4 md:gap-[34px] text-center md:text-left">
              <Link 
                href="/" 
                className="text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase"
              >
                HOME
              </Link>
              <Link 
                href="/headphones" 
                className="text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase"
              >
                HEADPHONES
              </Link>
              <Link 
                href="/speakers" 
                className="text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase"
              >
                SPEAKERS
              </Link>
              <Link 
                href="/earphones" 
                className="text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase"
              >
                EARPHONES
              </Link>
            </nav>
          </div>

          {/* Middle Section - Description and Social Icons */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 mb-12 lg:mb-14">
            {/* Description */}
            <div className="text-center md:text-left">
              <p className="text-white/50 text-[15px] leading-[25px] font-medium max-w-[540px] mx-auto md:mx-0">
                Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.
              </p>
            </div>

            {/* Social Icons - Desktop only in this position */}
            <div className="hidden lg:flex justify-end items-start gap-4">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} fill="currentColor" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} fill="currentColor" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} fill="currentColor" />
              </Link>
            </div>
          </div>

          {/* Bottom Section - Copyright and Social Icons (Mobile/Tablet) */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-0">
            {/* Copyright */}
            <p className="text-white/50 text-[15px] font-bold text-center md:text-left">
              Copyright 2021. All Rights Reserved
            </p>

            {/* Social Icons - Mobile and Tablet */}
            <div className="flex lg:hidden justify-center md:justify-end gap-4">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} fill="currentColor" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} fill="currentColor" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="text-white hover:text-[#D87D4A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} fill="currentColor" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}