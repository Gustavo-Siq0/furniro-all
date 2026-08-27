import './App.css'
import Header from './components/header';
import PageBanner from './components/page-banner/';
import Checkout from './components/checkout/';
import FeaturesSection from './components/features-section/';

function App() {

  return (
    <>
      <Header />
      <PageBanner
        title="Checkout"
        parentLabel="Home"
        currentLabel="Checkout"
      />
      <Checkout />
      <FeaturesSection />
    </>
  )
}

export default App
