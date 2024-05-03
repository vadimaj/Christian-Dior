import products from '../../data/products.json';
import ProductCard from './ProductCard';
const Products = () => {
  return (
    <section className="products mb-16 md:mb-36 overflow-x-hidden">
      <div className="container mx-auto ">
        <div className=" grid gap-x-5 sm:grid-cols-2 md:gap-x-4 md:grid-cols-6 md:grid-rows-[auto_1fr]  xl:grid-cols-7  xl:min-w-[1401px] divide-y-2 sm:divide-y-0">
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="uppercase text-[32px] font-secondary leading-[1.35]  mb-5">
              What else?
            </h2>
          </div>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
