import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Promo from '@/components/Promo';
import Delivery from '@/components/Delivery';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Promo />
      <Delivery />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
