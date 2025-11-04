import { EarphonesPage } from '../../components/category/CategoryPage';
import {Navbar} from '../../components/layout/Navigation';
import CategoryCardProps from '@/components/home/CategoryCards';
import AudioGearSectionProps from '@/components/home/AudioGearSection';
import Footer from '@/components/layout/Footer';

export default function Headphones() {
  return (
    <>
      <Navbar />
      <EarphonesPage />
     <CategoryCardProps />
      <AudioGearSectionProps />
      <Footer />
    </>
  );
}