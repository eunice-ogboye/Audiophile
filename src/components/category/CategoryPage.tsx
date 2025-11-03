"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Product Card Component
function ProductCard({ product, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-[125px] items-center mb-[120px] md:mb-[120px] lg:mb-[160px] ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
      {/* Image */}
      <div className={`${isReversed ? 'lg:col-start-2' : ''}`}>
        <div className="bg-[#F1F1F1] rounded-lg h-[352px] md:h-[352px] lg:h-[560px] flex items-center justify-center overflow-hidden">
          {/* Placeholder - Replace with actual image */}
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">{product.name} Image</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`text-center lg:text-left ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        {product.new && (
          <p className="text-[#D87D4A] text-[14px] tracking-[10px] font-normal mb-4 md:mb-4 uppercase">
            NEW PRODUCT
          </p>
        )}
        
        <h2 className="text-[28px] md:text-[40px] leading-[38px] md:leading-[44px] font-bold tracking-[1px] md:tracking-[1.43px] mb-6 md:mb-8 uppercase max-w-[300px] mx-auto lg:mx-0">
          {product.name}
        </h2>
        
        <p className="text-black/50 text-[15px] leading-[25px] font-medium mb-6 md:mb-10 max-w-[572px] mx-auto lg:mx-0">
          {product.description}
        </p>
        
        <Link
          href={`/product/${product.slug}`}
          className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}

// Category Hero Banner
function CategoryHero({ title }) {
  return (
    <section className="bg-[#191919] text-white">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 py-8 md:py-[105px] text-center">
        <h1 className="text-[28px] md:text-[40px] font-bold tracking-[2px] md:tracking-[1.43px] uppercase">
          {title}
        </h1>
      </div>
    </section>
  );
}

// Main Category Page Component
export default function CategoryPage({ category, products }) {
  return (
    <div className="bg-white">
      {/* Category Title Banner */}
      <CategoryHero title={category} />

      {/* Products List */}
      <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 py-16 md:py-[120px] lg:py-[160px]">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </section>
    </div>
  );
}

// Example usage with data structure
export function HeadphonesPage() {
  const products = [
    {
      id: 1,
      name: "XX99 MARK II HEADPHONES",
      slug: "xx99-mark-two-headphones",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "/images/product-xx99-mark-two.jpg",
      new: true
    },
    {
      id: 2,
      name: "XX99 MARK I HEADPHONES",
      slug: "xx99-mark-one-headphones",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      image: "/images/product-xx99-mark-one.jpg",
      new: false
    },
    {
      id: 3,
      name: "XX59 HEADPHONES",
      slug: "xx59-headphones",
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image: "/images/product-xx59.jpg",
      new: false
    }
  ];

  return <CategoryPage category="HEADPHONES" products={products} />;
}

export function SpeakersPage() {
  const products = [
    {
      id: 1,
      name: "ZX9 SPEAKER",
      slug: "zx9-speaker",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      image: "/images/product-zx9.jpg",
      new: true
    },
    {
      id: 2,
      name: "ZX7 SPEAKER",
      slug: "zx7-speaker",
      description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image: "/images/product-zx7.jpg",
      new: false
    }
  ];

  return <CategoryPage category="SPEAKERS" products={products} />;
}

export function EarphonesPage() {
  const products = [
    {
      id: 1,
      name: "YX1 WIRELESS EARPHONES",
      slug: "yx1-wireless-earphones",
      description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      image: "/images/product-yx1.jpg",
      new: true
    }
  ];

  return <CategoryPage category="EARPHONES" products={products} />;
}