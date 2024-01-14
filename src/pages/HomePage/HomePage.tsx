import Hero from '@/components/HomePage/Hero';
import Header from '@/components/HomePage/Header';
import Invitation from '@/components/HomePage/Invitation';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/HomePage/PhotoGallery';

const HomePage = () => {
  return (
    <div className='bg-red-50'>
      <Header />
      <Hero />
      <Invitation />
      <PhotoGallery />
      <Footer />
    </div>
  );
};
export default HomePage;
