import { useCallback, useRef } from 'react';

import slides from '../../data/images.json';
import SliderItem from './SlideItem';
import SliderNavButtons from '../../ui/SliderNavButtons';

const SliderCenter = () => {
  const swiperRef = useRef(null);
  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  return (
    // <div className="mb-5 grid gap-x-5 grid-cols-6">
    <div className="mb-5">
      <swiper-container
        loop="true"
        freeMode="true"
        slides-per-view="4"
        space-between="20"
        ref={swiperRef}
        // className="grid gap-x-5"
      >
        {slides.map((slide) => (
          <swiper-slide key={slide.id} className="col-span-2">
            <SliderItem slide={slide} />
          </swiper-slide>
        ))}
      </swiper-container>
      {/* <div className=" ml-[-200px]">
        <SliderNavButtons
          onNextSlide={handleNext}
          onPrevSlide={handlePrev}
          className="hover:fill-accent transition-color duration-[250ms]"
        />
      </div> */}
    </div>
  );
};

export default SliderCenter;
