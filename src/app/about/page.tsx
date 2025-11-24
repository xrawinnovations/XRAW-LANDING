import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/about';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
      
       <About/>
      </div>
      <Footer />
    </main>
  );
}
