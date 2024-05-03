/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div className="mb-8 pt-8 flex flex-col items-center md:col-span-2 md:mb-0 md:row-start-2 xl:row-start-1  ">
      <h3 className="grow uppercase text-center font-bold text-sm text-black/50 mb-5">
        {product.title}
      </h3>
      <img className="mb-5 object-cover" src={product.url} alt="slide" />
      <p className="uppercase font-bold mb-2.5">{product.productSeries}</p>
      <p className="mb-2.5 capitalize">{product.name}</p>
      <p className="text-[32px] font-secondary leading-[1.35]">
        {product.price}&euro;
      </p>
    </div>
  );
};

export default ProductCard;
