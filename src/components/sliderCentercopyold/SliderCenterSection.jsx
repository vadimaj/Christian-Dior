/* eslint-disable react/prop-types */
import SliderCenter from './SliderCenter';
import Button from '../../ui/Button';

const SliderCenterSection = () => {
  return (
    <section className="SliderCenterSection mb-[150px] overflow-x-hidden">
      <div className="container mx-auto  ">
        <div className="SliderCenterSection__inner pl-[200px] min-w-[1800px] ">
          <SliderCenter />
          <Button type="cenerSliderSection">Show me more</Button>
        </div>
      </div>
    </section>
  );
};

export default SliderCenterSection;
