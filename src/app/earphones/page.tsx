import { EarphonesPage } from '../../components/category/CategoryPage';
import {Navbar} from '../../components/layout/Navigation';
import CategoryCardProps from '@/components/home/CategoryCards';
import AudioGearSectionProps from '@/components/home/AudioGearSection';
import Footer from '@/components/layout/Footer';
import { products } from '@/lib/data/products';

export default function Earphones() {

  const earphones = products.filter(p => p.category === 'earphones');
  return (
    <>
      <Navbar />
      <EarphonesPage products={earphones} />
     <CategoryCardProps />
      <AudioGearSectionProps />
      <Footer />
    </>
  );
}