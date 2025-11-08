// src/app/product/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navigation';
import ProductDetailPage from '@/components/product/ProductDetailPage';
import CategoryCards from '@/components/home/CategoryCards';
import AudioGearSection from '@/components/home/AudioGearSection';
import Footer from '@/components/layout/Footer';
import { getProductBySlug, getAllProducts } from '@/lib/data/products';

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Page props interface
interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Audiophile`,
    description: product.description,
  };
}

// Main Product Page Component
export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ProductDetailPage product={product} />
      <CategoryCards />
      <AudioGearSection />
      <Footer />
    </>
  );
}

// Optional: Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour