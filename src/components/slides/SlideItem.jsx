/* eslint-disable react/prop-types */
const SliderItem = ({ slide }) => {
  return (
    <div className="">
      <h2 className="uppercase font-bold mb-5">{slide.title}</h2>
      <img className="" src={slide.url} alt="slide" />
    </div>
  );
};

export default SliderItem;
