import { Navbar } from '../layout/Navigation';
import Hero from '../layout/Header';
import CategoryCards from './CategoryCards';
import FeaturedProducts from './FeaturedProducts';
import Footer from '../layout/Footer';
import AudioGearSectionProps from './AudioGearSection';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryCards />
       <FeaturedProducts />
      <AudioGearSectionProps />
      <Footer />
    </div>
  );
}