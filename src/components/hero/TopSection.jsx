import { useCallback, useRef } from 'react';
import SliderNavButtons from '../../ui/SliderNavButtons';
import Button from '../../ui/Button';
import PrimarySlide from '../hero/PrimarySlide';
import SecondarySlide from '../hero/SecondarySlide';

const TopSection = () => {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  return (
    <div className="top-section mb-[100px] xl:mb-[150px] ">
      <swiper-container loop={true} ref={swiperRef}>
        <swiper-slide>
          <PrimarySlide />
        </swiper-slide>
        <swiper-slide>
          <SecondarySlide slidePosition="prev" />
        </swiper-slide>
        <swiper-slide>
          <SecondarySlide slidePosition="next" />
        </swiper-slide>
      </swiper-container>
      <div className="container mx-auto">
        <SliderNavButtons
          onNextSlide={handleNext}
          onPrevSlide={handlePrev}
          className="hover:fill-accent transition-color duration-[250ms]"
          type="secondary"
        />
      </div>
    </div>
  );
};

export default TopSection;
