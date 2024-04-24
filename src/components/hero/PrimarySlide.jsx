import image01 from '../../assets/images/slider-top/slide-top01.jpg';
import mainSlideMob from '../../assets/images/slider-top/slide_main-mob.jpg';
import mainSlide from '../../assets/images/slider-top/slide_main.jpg';
import Button from '../../ui/Button';
const PrimarySlide = () => {
  return (
    <div className="container mx-auto ">
      <div className="h-[340px] grid gap-x-5  grid-cols-2 pt-10 sm:gap-x-8 md:h-[420px] md:pt-[50px] md:gap-x-5 md:grid-cols-3 lg:h-[600px] xl:min-h-[700px]  xl:grid-cols-6   ">
        <img
          className="hidden md:block xl:mb-[187px] lg:mb-48 lg:mt-auto "
          src={image01}
          alt="slide01"
        />
        <div className=" self-start lg:mb-48 lg:mt-auto xl:col-start-3 xl:mb-[187px]">
          <h1 className="uppercase font-secondary text-[2rem] sm:text-[3rem]  md:text-[4.375rem] lg:mb-[56px] leading-[1.33] ">
            Gris Dior
          </h1>
          <p className="hidden sm:block text-2xl mb-2.5">Fragrance</p>
          <p className="hidden sm:block leading-snug sm:mb-5 tracking-normal ">
            With Gris Dior you dare to reveal your most surprising, mysterious
            and unexpected facets.
          </p>
          <p className="mb-12 leading-snug tracking-normal text-sm sm:hidden">
            Reveal your most surprising, mysterious and unexpected facets.
          </p>
          <Button type="primary">Discover</Button>
        </div>
        <picture className="xl:col-start-5 xl:col-span-2 ">
          <source media="(min-width:768px)" srcSet={mainSlide} />
          <img
            className="h-full object-cover object-[20%_top]"
            src={mainSlideMob}
            alt="gris dior Jenna Ortega"
          />
        </picture>
      </div>
    </div>
  );
};

export default PrimarySlide;
