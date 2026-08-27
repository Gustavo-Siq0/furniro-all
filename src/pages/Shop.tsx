import PageBanner from "../components/page-banner";
import FeaturesSection from "../components/features-section";
import Footer from "../components/footer";
import ProductsSection from "../components/products-section";

function Shop() {
  return (
    <>
      <PageBanner title="Shop" parentLabel="Home" currentLabel="Shop" />
      <ProductsSection category="" />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default Shop;
