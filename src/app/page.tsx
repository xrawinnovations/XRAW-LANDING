import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <Services />
        <Technologies/>
       
        {/* <CustomerReviews /> */}
      </div>
      <Footer />
    </main>
  );
}
