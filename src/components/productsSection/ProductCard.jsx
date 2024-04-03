/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <li className="productCard text-center basis-[cacl(100% - 40px)/3]">
      <h3 className="uppercase text-bold text-secondary mb-5">
        {product.title}
      </h3>
      <img className="mb-5 object-cover" src={product.url} alt="slide" />
      <p className="uppercase font-bold mb-2.5">{product.productSeries}</p>
      <p className="mb-2.5 capitalize">{product.name}</p>
      <p className="text-[32px] font-secondary leading-[1.35]">
        {product.price}&euro;
      </p>
    </li>
  );
};

export default ProductCard;
