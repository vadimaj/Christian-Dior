/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div className="productCard text-center">
      <h3 className="uppercase text-bold text-secondary mb-5">
        {product.title}
      </h3>
      <img className="mb-5" src={product.url} alt="slide" />
      <p className="uppercase font-bold mb-2.5">{product.productSeries}</p>
      <p className="mb-2.5 capitalize">{product.name}</p>
      <p className="text-[32px] font-secondary leading-[1.35]">
        {product.price}&euro;
      </p>
    </div>
  );
};

export default ProductCard;
