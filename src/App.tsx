import './App.css'
import Header from './components/header';
import PageBanner from './components/page-banner/';

function App() {

  return (
    <>
      <Header />
      <PageBanner
        title="Checkout"
        parentLabel="Home"
        currentLabel="Checkout"
      />
    </>
  )
}

export default App
