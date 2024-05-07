/* eslint-disable react/prop-types */
import Icon from '../components/icons/Icon';

const SliderNavButtons = ({
  onNextSlide,
  onPrevSlide,
  className = '',
  type,
}) => {
  const basicStyles = 'flex justify-between w-[120px] cursor-pointer';

  const styles = {
    primary: basicStyles + ' -mb-5',
    secondary: basicStyles + ' -mt-5',
    centerSliderSection: basicStyles,
  };

  return (
    <div className={styles[type]}>
      <button onClick={onNextSlide} className="py-3">
        <Icon id="arrow-left" width="50" height="15" className={className} />
      </button>
      <button onClick={onPrevSlide}>
        <Icon id="arrow-right" width="50" height="15" className={className} />
      </button>
    </div>
  );
};

export default SliderNavButtons;
