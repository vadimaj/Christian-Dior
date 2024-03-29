import AboutSection from './components/AboutSection';
import Header from './components/Header';
import SliderCenterSection from './components/SliderCenterSection';
import TopSection from './components/TopSection';
import AccordionSection from './components/AccordionSection';
import Products from './components/productsSection/Products';
import Footer from './components/FooterSection/Footer';

function App() {
  return (
    <>
      <Header />
      <TopSection />
      <AboutSection />
      <SliderCenterSection />
      <AccordionSection />
      <Products />
      <Footer />
    </>
  );
}

export default App;