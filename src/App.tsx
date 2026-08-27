import './App.css'
import Header from './components/header';
import PageBanner from './components/page-banner/';
import Checkout from './components/checkout/';

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
    </>
  )
}

export default App
