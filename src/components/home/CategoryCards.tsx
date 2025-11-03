"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Category {
  title: string;
  image: string;
  link: string;
}

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

function CategoryCard({ title, image, link }: CategoryCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-end bg-[#F1F1F1] rounded-lg pt-[70px] pb-[25px] text-center group hover:shadow-md transition-all duration-300 cursor-pointer">
      {/* Product Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[110px] sm:w-[130px] md:w-[150px] lg:w-[160px]">
        <Image
          src={image}
          alt={`${title} category`}
          width={160}
          height={160}
          className="w-full h-auto object-contain drop-shadow-xl"
          priority
        />
      </div>

      {/* Text Content */}
      <h3 className="text-[14px] md:text-[16px] lg:text-[17px] font-bold tracking-[1px] md:tracking-[1.2px] mb-[10px] uppercase mt-[60px] md:mt-[70px]">
        {title}
      </h3>

      <Link
        href={link}
        className="inline-flex items-center gap-[10px] text-[12px] md:text-[13px] font-bold tracking-[1px] text-black/50 uppercase group-hover:text-[#D87D4A] transition-colors"
      >
        SHOP
        <ChevronRight
          size={16}
          className="text-[#D87D4A] group-hover:translate-x-[3px] transition-transform"
          strokeWidth={3}
        />
      </Link>
    </div>
  );
}

export default function CategoryCards() {
  const categories: Category[] = [
    {
      title: "HEADPHONES",
      image: "/assets/home/desktop/cat-headphone.png",
      link: "/headphones",
    },
    {
      title: "SPEAKERS",
      image: "/assets/home/desktop/image-removebg-preview.png",
      link: "/speakers",
    },
    {
      title: "EARPHONES",
      image: "/assets/home/desktop/image-earphones.png",
      link: "/earphones",
    },
  ];

  return (
    <section className="bg-white py-[70px] md:py-[90px] lg:py-[110px]">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px] md:gap-[25px] lg:gap-[30px]">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { CategoryCard };
export type { Category, CategoryCardProps };
