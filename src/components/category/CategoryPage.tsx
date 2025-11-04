"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  new: boolean;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

interface CategoryPageProps {
  category: string;
  products: Product[];
}

interface CategoryHeroProps {
  title: string;
}

// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div 
      className={`grid lg:grid-cols-2 gap-4 lg:gap-[95px] items-center mb-[120px] last:mb-0 lg:mb-[160px] lg:last:mb-0`}
    >
      {/* Image Container */}
      <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="bg-[#F1F1F1] rounded-lg h-[352px] md:h-[352px] lg:h-[560px] flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={268.02}
              height={268.02}
              className="object-contain max-w-[200px] md:max-w-[240px] lg:max-w-[268.02px] w-auto h-auto"
              priority={index === 0}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`text-center lg:text-left ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        {product.new && (
          <p className="text-[#D87D4A] text-[14px] tracking-[10px] font-normal mb-4 uppercase">
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
};

// Category Hero Banner
const CategoryHero: React.FC<CategoryHeroProps> = ({ title }) => {
  return (
    <section className="bg-[#191919] text-white">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 py-8 md:py-[105px] text-center">
        <h1 className="text-[28px] md:text-[40px] font-bold tracking-[2px] md:tracking-[1.43px] uppercase">
          {title}
        </h1>
      </div>
    </section>
  );
};

// Main Category Page Component
const CategoryPage: React.FC<CategoryPageProps> = ({ category, products }) => {
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
};

export default CategoryPage;

// Example usage with data
export const HeadphonesPage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "XX99 MARK II HEADPHONES",
      slug: "xx99-mark-two-headphones",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "/assets/product-xx59-headphones/desktop/trans heahdphone.png",
      new: true
    },
    {
      id: 2,
      name: "XX99 MARK I HEADPHONES",
      slug: "xx99-mark-one-headphones",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      image: "/assets/home/desktop/cat-headphone.png",
      new: false
    },
    {
      id: 3,
      name: "XX59 HEADPHONES",
      slug: "xx59-headphones",
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      new: false
    }
  ];

  return <CategoryPage category="HEADPHONES" products={products} />;
};

export const SpeakersPage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "ZX9 SPEAKER",
      slug: "zx9-speaker",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      image: "/assets/home/desktop/image-speaker-zx9.png",
      new: true
    },
    {
      id: 2,
      name: "ZX7 SPEAKER",
      slug: "zx7-speaker",
      description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image: "/assets/home/desktop/speaker.png",
      new: false
    }
  ];

  return <CategoryPage category="SPEAKERS" products={products} />;
};

export const EarphonesPage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "YX1 WIRELESS EARPHONES",
      slug: "yx1-wireless-earphones",
      description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      image: "/assets/home/desktop/image-earphones.png",
      new: true
    }
  ];

  return <CategoryPage category="EARPHONES" products={products} />;
};