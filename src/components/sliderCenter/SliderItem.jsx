/* eslint-disable react/prop-types */

const SliderItem = ({ slide }) => {
  return (
    <>
      <div className="slide__data">
        <h2 className="uppercase font-bold mb-5">{slide.title}</h2>
      </div>
      <div className="slide__image">
        <picture>
          <source media="(min-width:960px)" srcSet={slide.url} />
          <source media="(min-width:768px)" srcSet={slide.url_tab} />
          <source media="(min-width:640px)" srcSet={slide.url_tab_small} />
          <img
            className="w-full"
            src={slide.url}
            alt="gris dior Jenna Ortega"
          />
        </picture>
      </div>
    </>
  );
};

export default SliderItem;
