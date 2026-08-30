import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyMahati from '@/components/WhyMahati';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import NashikAreas from '@/components/NashikAreas';
import About from '@/components/About';
import Forms from '@/components/Forms';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProperties />
        <WhyMahati />
        <Services />
        <HowItWorks />
        <NashikAreas />
        <About />
        <Forms />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
