import FormContact from '../components/form-contact';
import PageBanner from '../components/page-banner';
import FeaturesSection from "../components/features-section";
import Footer from "../components/footer";


const Contact = () => {
  return (
    <main className='pt-[80px] md:pt-[100px]'>
      <PageBanner title="Contact" parentLabel="Home" currentLabel="Contact" />
      <FormContact />
      <FeaturesSection />
      <Footer />
    </main>
  );
}

export default Contact;
