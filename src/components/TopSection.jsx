import image01 from '../assets/images/slider-top/top01.jpg';
import image02 from '../assets/images/slider-top/top02.jpg';
const TopSection = () => {
  return (
    <div className="top-section mb-[150px] ">
      <swiper-container loop="true" navigation="true">
        <swiper-slide>
          <div className="top-slide">
            <div className="container mx-auto">
              <div className="top-slide__inner flex justify-between items-center">
                <img src={image01} alt="slide01" />
                <div className="top-slide__content basis-[183px]">
                  <h1 className="uppercase">Gris Dior</h1>
                  <p className="subtitle">Fragrance</p>
                  <p className="text">
                    With Gris Dior you dare to reveal your most surprising,
                    mysterious and unexpected facets.
                  </p>
                  <a href="#" className="top-slide__btn">
                    Discover
                  </a>
                </div>
                <img src={image02} alt="slide02" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide2</swiper-slide>
        <swiper-slide>Slide3</swiper-slide>
      </swiper-container>
    </div>
  );
};

export default TopSection;
