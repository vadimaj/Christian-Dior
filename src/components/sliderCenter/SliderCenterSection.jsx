/* eslint-disable react/prop-types */
import SliderCenter from './SliderCenter';
import Button from '../../ui/Button';

const SliderCenterSection = () => {
  return (
    <section className="SliderCenterSection mb-[150px] overflow-x-hidden">
      <div className="container mx-auto">
        <SliderCenter />
        <Button type="cenerSliderSection">Show me more</Button>
      </div>
    </section>
  );
};

export default SliderCenterSection;
