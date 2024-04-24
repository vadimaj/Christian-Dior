import AboutSection from './components/AboutSection';
import Header from './components/header/Header';
import SliderCenterSection from './components/sliderCenter/SliderCenterSection';
import TopSection from './components/hero/TopSection';
import AccordionSection from './components/AccordionSection';
import Products from './components/productsSection/Products';
import Footer from './components/FooterSection/Footer';

import { MenuProvider } from './context/menuProvider';

function App() {
  return (
    <>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <TopSection />
      <AboutSection />
      <SliderCenterSection />
      {/*<AccordionSection />
      <Products />
      <VideoSection />
      <Footer /> */}
    </>
  );
}

export default App;
