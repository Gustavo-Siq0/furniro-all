import PageBanner from "../components/page-banner";
import Checkout from "../components/checkout";
import FeaturesSection from "../components/features-section";
import Footer from "../components/footer";

function CheckoutPage() {
  return (
    <main className='pt-[80px] md:pt-[100px]'>
      <PageBanner
        title="Checkout"
        parentLabel="Home"
        currentLabel="Checkout"
      />
      <Checkout />
      <FeaturesSection />
      <Footer />
    </main>
  );
}

export default CheckoutPage;
