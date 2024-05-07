/* eslint-disable react/prop-types */
import { useEffect, useCallback, useRef } from 'react';
import slides from '../../data/images.json';

import SliderItem from './SliderItem';
import SliderNavButtons from '../../ui/SliderNavButtons';
import Button from '../../ui/Button';

const SliderCenterSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef?.current) {
      const swiperContainer = swiperRef?.current;
      const swiperParams = {
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      };
      Object.assign(swiperContainer, swiperParams);
      swiperContainer.initialize();
    }
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  return (
    <section className="SliderCenterSection mb-16 md:mb-36 overflow-hidden">
      <div className="container mx-auto">
        <div className="md:w-full">
          <div className="xsm:min-w-[450px] sm:min-w-[1240px] md:min-w-[964px] lg:min-w-[1405px] xl:min-w-[1810px] ">
            <div className="relative grid gap-5 xsm:grid-cols-4 sm:grid-cols-4 lg:grid-cols-9 lg:static">
              <div className="absolute bottom-[10px] left-1/2 sm:left-40 md:left-1/2 lg:static lg:self-end sm:row-start-2 lg:row-start-1 sm:col-start-2 md:col-start-2 lg:col-start-1 ">
                <SliderNavButtons
                  onNextSlide={handleNext}
                  onPrevSlide={handlePrev}
                  className="hover:fill-accent transition-color duration-[250ms]"
                  type="primary"
                />
              </div>

              <div className="xsm:col-span-4 sm:col-span-4 md:col-span-4 lg:col-start-2 lg:col-span-8">
                <swiper-container ref={swiperRef} init="false">
                  {slides.map((slide) => (
                    <swiper-slide key={slide.id}>
                      <SliderItem slide={slide} />
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
              <div className="xsm:col-span-2 lg:col-start-2 lg:col-span-2">
                <Button type="centerSliderSection">Show me more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderCenterSection;

// return (
//     <section className="SliderCenterSection mb-16 md:mb-36 overflow-hidden">
//       <div className="container mx-auto">
//         <div className="card__content sm:mb-5 lg:mb-0 xsm:ml-[80px] xsm:w-[600px]  sm:min-w-[800px]   md:min-w-[calc((100%_-_40px)*1.3_+_60px)]  lg:ml-[calc((100%_-_100px)/6_+_20px)]">
//           <swiper-container
//             className="  sm:max-w-[640px] md:w-[768px] lg:w-[960px]"
//             ref={swiperRef}
//             init="false"
//           >
//             {slides.map((slide) => (
//               <swiper-slide
//                 key={slide.id}
//                 className="   sm:max-w-[calc((100%_-_40px)/2)]  md:min-w-[calc((100%_-_40px)/3)]"
//               >
//                 <SliderItem slide={slide} />
//               </swiper-slide>
//             ))}
//           </swiper-container>
//         </div>
//         <div className="hidden lg:block">
//           <SliderNavButtons
//             onNextSlide={handleNext}
//             onPrevSlide={handlePrev}
//             className="hover:fill-accent transition-color duration-[250ms]"
//           />
//         </div>
//         <Button type="centerSliderSection">Show me more</Button>
//       </div>
//     </section>
//   );
// };

// export default SliderCenterSection;
