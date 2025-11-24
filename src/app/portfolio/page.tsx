import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Portfolio from '@/components/sections/portfolio';
export default function PortfolioPage() {
 

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <Portfolio/>

     

      <Footer />
    </main>
  );
} 