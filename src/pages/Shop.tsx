import PageBanner from "../components/page-banner";
import FeaturesSection from "../components/features-section";
import Footer from "../components/footer";
import ProductsSection from "../components/products-section";

function Shop() {
  return (
    <main className='pt-[80px] md:pt-[100px]'>
      <PageBanner title="Shop" parentLabel="Home" currentLabel="Shop" />
      <ProductsSection category="" />
      <FeaturesSection />
      <Footer />
    </main>
  );
}

export default Shop;
