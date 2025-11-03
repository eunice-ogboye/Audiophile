"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#191919] border-b border-[#979797]/20">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0">
        <div className="flex items-center justify-between h-24">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-[#D87D4A] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-white font-bold text-[24px] md:text-[28px] tracking-tight">
            audiophile
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-[34px] absolute left-1/2 transform -translate-x-1/2">
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
          </div>

          {/* Cart Icon */}
          <button 
            className="text-white hover:text-[#D87D4A] transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={23} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-8 pt-2 space-y-4 border-t border-[#979797]/20 mt-2">
            <Link 
              href="/" 
              className="block text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/headphones" 
              className="block text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              HEADPHONES
            </Link>
            <Link 
              href="/speakers" 
              className="block text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              SPEAKERS
            </Link>
            <Link 
              href="/earphones" 
              className="block text-white text-[13px] font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              EARPHONES
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export { Navbar};