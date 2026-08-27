import PageBanner from "../components/page-banner";
import Checkout from "../components/checkout";
import FeaturesSection from "../components/features-section";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <PageBanner
        title="Checkout"
        parentLabel="Home"
        currentLabel="Checkout"
      />
      <Checkout />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Home;
