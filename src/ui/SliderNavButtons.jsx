/* eslint-disable react/prop-types */
import Icon from '../components/icons/Icon';

const SliderNavButtons = ({ onNextSlide, onPrevSlide }) => {
  return (
    <div className=" flex justify-between w-[120px] -mt-5 cursor-pointer">
      <button onClick={onNextSlide} className="py-3">
        <Icon id="arrow-left" width="50" height="15" />
      </button>
      <button onClick={onPrevSlide}>
        <Icon id="arrow-right" width="50" height="15" />
      </button>
    </div>
  );
};

export default SliderNavButtons;
