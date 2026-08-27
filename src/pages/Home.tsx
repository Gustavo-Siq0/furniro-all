import Hero from '../components/hero';
import BrowseRange from '../components/browse-range';
import OurProducts from '../components/our-products';
import Rooms from '../components/rooms';
import Forniture from '../components/forniture';
import Footer from '../components/footer';

const Home = () => {
  return (
    <main className='pt-[80px] md:pt-[100px]'>
        <Hero />
        <BrowseRange />
        <OurProducts />
        <Rooms />
        <Forniture />
        <Footer />
    </main>
  );
}

export default Home;