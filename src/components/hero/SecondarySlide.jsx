/* eslint-disable react/prop-types */

import Button from '../../ui/Button';
const SecondarySlide = ({ slidePosition }) => {
  const basicStyles = 'h-full bg-no-repeat bg-cover bg-center';
  const styles = {
    prev:
      basicStyles +
      ' bg-[url("./assets/images/slider-top/slide_prev-mob.jpg")] sm:bg-[url("./assets/images/slider-top/slide_prev-tab.jpg")] lg:bg-[url("./assets/images/slider-top/slide_prev.jpg")]',
    next:
      basicStyles +
      ' bg-[url("./assets/images/slider-top/slide_next-mob.jpg")] sm:bg-[url("./assets/images/slider-top/slide_next-tab.jpg")] lg:bg-[url("./assets/images/slider-top/slide_next.jpg")] ',
  };

  return (
    <div className={styles[slidePosition]}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-[300px] mb-10 sm:justify-end  md:h-[420px] lg:h-[600px] xl:h-[700px] md:mb-[50px]  ">
          <Button type="secondary">Your new experience</Button>
        </div>
      </div>
    </div>
  );
};

export default SecondarySlide;
