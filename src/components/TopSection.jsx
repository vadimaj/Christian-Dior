import image01 from '../assets/images/slider-top/slide-top01.jpg';
import image02 from '../assets/images/slider-top/slide-top01-1.jpg';
import Button from '../ui/Button';
import { useCallback, useRef } from 'react';
import SliderNavButtons from '../ui/SliderNavButtons';

const TopSection = () => {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  return (
    <div className="top-section mb-[150px] ">
      <swiper-container loop={true} ref={swiperRef}>
        <swiper-slide>
          <div className="top-slide ">
            <div className="container mx-auto">
              <div className="top-slide__inner min-h-[750px] grid  grid-cols-[max-content_183px_max-content] grid-rows-[auto_187px] justify-between">
                <img className="self-end" src={image01} alt="slide01" />
                <div className="top-slide__content self-end">
                  <h1 className="top-slide__title uppercase font-secondary text-[70px] leading-[1.33] mb-[56px]">
                    Gris Dior
                  </h1>
                  <p className="subtitle text-2xl mb-2.5">Fragrance</p>
                  <p className="text leading-snug mb-5 tracking-normal">
                    With Gris Dior you dare to reveal your most surprising,
                    mysterious and unexpected facets.
                  </p>
                  <Button type="primary">Discover</Button>
                </div>
                <img
                  className="row-span-2 justify-self-end self-end"
                  src={image02}
                  alt="slide02"
                />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="top-slide h-[700px] bg-[url('assets/images/slider-top/slide_bg_02.jpg')] bg-no-repeat bg-cover bg-[top_center] ">
            <div className="container mx-auto">
              <div className="top-slide__inner min-h-[750px] flex items-center">
                <Button type="secondary">Your new experience</Button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="top-slide h-[700px] bg-[url('assets/images/slider-top/slide_bg_03.jpg')] bg-no-repeat  bg-cover bg-[top_center]">
            <div className="container mx-auto">
              <div className="top-slide__inner min-h-[750px] flex items-center ">
                <Button type="secondary">Your new experience</Button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div className="container mx-auto">
        <SliderNavButtons onNextSlide={handleNext} onPrevSlide={handlePrev} />
      </div>
    </div>
  );
};

export default TopSection;
