/* eslint-disable react/prop-types */
const SliderItem = ({ slide }) => {
  return (
    <>
      <div className="card__data">
        <h2 className="uppercase font-bold mb-5">{slide.title}</h2>
      </div>
      <div className="card__image xsm:min-w-[180px]">
        <img className="" src={slide.url} alt="slide" />
      </div>
    </>
  );
};

export default SliderItem;
