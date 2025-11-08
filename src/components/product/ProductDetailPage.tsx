"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludedItem {
  quantity: number;
  item: string;
}

interface GalleryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Gallery {
  first: GalleryImage;
  second: GalleryImage;
  third: GalleryImage;
}

interface RelatedProduct {
  slug: string;
  name: string;
  image: ProductImage;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  image: ProductImage;
  category: string;
  categoryImage: ProductImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: Gallery;
  others: RelatedProduct[];
}

// Go Back Button
const GoBackButton = () => (
  <button
    onClick={() => window.history.back()}
    className="text-black/50 hover:text-[#D87D4A] text-[15px] font-medium transition-colors mb-6 md:mb-8 lg:mb-14"
  >
    Go Back
  </button>
);

// Product Hero Section
const ProductHero = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  return (
    <section className="mb-20 md:mb-28 lg:mb-40">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
        {/* Product Image */}
        <div className="bg-[#F1F1F1] rounded-lg overflow-hidden">
          <div className="relative w-full h-[327px] md:h-[480px] lg:h-[560px]">
            <Image
              src={product.categoryImage.desktop}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          {product.new && (
            <p className="text-[#D87D4A] text-[14px] tracking-[10px] font-normal mb-4 uppercase">
              NEW PRODUCT
            </p>
          )}

          <h1 className="text-[28px] md:text-[40px] leading-[38px] md:leading-[44px] font-bold tracking-[1px] md:tracking-[1.43px] mb-6 md:mb-8 uppercase">
            {product.name}
          </h1>

          <p className="text-black/50 text-[15px] leading-[25px] font-medium mb-6 md:mb-8">
            {product.description}
          </p>

          <p className="text-[18px] font-bold tracking-[1.29px] mb-8">
            $ {product.price.toLocaleString()}
          </p>

          <div className="flex items-center gap-4">
            {/* Quantity Control */}
            <div className="flex items-center bg-[#F1F1F1]">
              {["decrement", "increment"].map((type) => (
                <button
                  key={type}
                  onClick={() => changeQuantity(type as "increment" | "decrement")}
                  className="px-4 py-3 text-black/25 hover:text-[#D87D4A] font-bold transition-colors"
                >
                  {type === "decrement" ? "-" : "+"}
                </button>
              ))}
              <span className="px-4 py-3 text-[13px] font-bold">{quantity}</span>
            </div>

            {/* Add to Cart */}
            <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] font-bold tracking-[1px] px-8 py-4 transition-colors uppercase">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features & In-The-Box Section
const ProductDetails = ({
  features,
  includes,
}: {
  features: string;
  includes: IncludedItem[];
}) => (
  <section className="mb-20 md:mb-28 lg:mb-40">
    <div className="grid lg:grid-cols-[2fr,1fr] gap-20 lg:gap-28">
      {/* Features */}
      <div>
        <h2 className="section-title">FEATURES</h2>
        <p className="text-black/50 text-[15px] leading-[25px] font-medium whitespace-pre-line">
          {features}
        </p>
      </div>

      {/* In The Box */}
      <div>
        <h2 className="section-title">IN THE BOX</h2>
        <ul className="space-y-2">
          {includes.map(({ quantity, item }, i) => (
            <li key={i} className="flex gap-6">
              <span className="text-[#D87D4A] text-[15px] font-bold">{quantity}x</span>
              <span className="text-black/50 text-[15px] font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

// Gallery Section
const ProductGallery = ({
  gallery,
  productName,
}: {
  gallery: Gallery;
  productName: string;
}) => (
  <section className="mb-20 md:mb-28 lg:mb-40">
    <div className="grid md:grid-cols-[1fr,1fr] gap-5 md:gap-6 lg:gap-8">
      {/* Left column */}
      <div className="grid grid-rows-2 gap-5 md:gap-6 lg:gap-8">
        {[gallery.first, gallery.second].map((img, i) => (
          <div
            key={i}
            className="relative h-[174px] lg:h-[280px] bg-[#F1F1F1] rounded-lg overflow-hidden"
          >
            <Image
              src={img.desktop}
              alt={`${productName} gallery image ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

     
      <div className="relative h-[368px] lg:h-[592px] bg-[#F1F1F1] rounded-lg overflow-hidden">
        <Image
          src={gallery.third.desktop}
          alt={`${productName} gallery image 3`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  </section>
);


const RelatedProducts = ({ products }: { products: RelatedProduct[] }) => (
  <section className="mb-28 md:mb-28 lg:mb-40">
    <h2 className="text-[24px] md:text-[32px] font-bold tracking-[1.14px] mb-10 md:mb-14 lg:mb-16 text-center uppercase">
      YOU MAY ALSO LIKE
    </h2>

    <div className="grid md:grid-cols-3 gap-10 md:gap-6 lg:gap-8">
      {products.map(({ slug, name, image }) => (
        <div key={slug} className="text-center">
          <div className="bg-[#F1F1F1] rounded-lg mb-8 overflow-hidden">
            <div className="relative w-full h-[120px] md:h-[318px]">
              <Image src={image.desktop} alt={name} fill className="object-cover" />
            </div>
          </div>
          <h3 className="text-[24px] font-bold tracking-[1.71px] mb-8 uppercase">{name}</h3>
          <Link
            href={`/product/${slug}`}
            className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] font-bold tracking-[1px] px-[30px] py-[15px] transition-colors uppercase"
          >
            SEE PRODUCT
          </Link>
        </div>
      ))}
    </div>
  </section>
);


export default function ProductDetailPage({ product }: { product: Product }) {
  return (
    <div className="bg-white">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 py-8 md:py-16 lg:py-20">
        <GoBackButton />
        <ProductHero product={product} />
        <ProductDetails features={product.features} includes={product.includes} />
        <ProductGallery gallery={product.gallery} productName={product.name} />
        <RelatedProducts products={product.others} />
      </div>
    </div>
  );
}


export type {
  Product,
  ProductImage,
  IncludedItem,
  Gallery,
  RelatedProduct,
};
