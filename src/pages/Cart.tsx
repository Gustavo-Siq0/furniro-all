import CartConfig from '../components/cart-config';
import PageBanner from '../components/page-banner';
import FeaturesSection from '../components/features-section';
import Footer from '../components/footer';

const Cart = () => {
  return (
    <main className='pt-[80px] md:pt-[100px]'>
      <PageBanner title='Cart' parentLabel='Home' currentLabel='Cart' />
      <CartConfig />
      <FeaturesSection />
      <Footer />
    </main>
  );
};

export default Cart;
