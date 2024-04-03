import products from '../../data/products.json';
import ProductCard from './ProductCard';
const Products = () => {
  return (
    <section className="products mb-[150px] overflow-x-hidden">
      <div className="container mx-auto ">
        <div className="products__inner flex min-w-[1400px]">
          <div className="title basis-[203px] ">
            <h2 className="products__title uppercase text-[32px] font-secondary leading-[1.35] max-w-[100px] ">
              what else
            </h2>
          </div>
          <ul className="flex gap-5">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
