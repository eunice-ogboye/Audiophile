import { SpeakersPage } from '../../components/category/CategoryPage';
import { Navbar } from '../../components/layout/Navigation';
import CategoryCards from '@/components/home/CategoryCards';
import AudioGearSection from '@/components/home/AudioGearSection';
import Footer from '@/components/layout/Footer';
import { getProductsByCategory } from '@/lib/data/products';

export default function Speakers() {
  const products = getProductsByCategory('speakers');

  return (
    <>
      <Navbar />
      <SpeakersPage products={products} />
      <CategoryCards />
      <AudioGearSection />
      <Footer />
    </>
  );
}
