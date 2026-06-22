import { products, filterList } from "@/data/products.ts";
import ProductCard from "@/components/products/ProductCard.tsx";
import ProductFilter from "@/components/products/ProductFilter.tsx";
import PaginationButton from "@/components/products/Pagination.tsx";

function ProductPage() {
  return (
    <div className="container mx-auto">
      <section className="my-8 flex flex-col justify-between md:flex-col lg:flex-row">
        {/*Product Filter*/}
        <section className="w-full lg:w-1/5">
          <ProductFilter
            title="Furnitures Made By"
            filterLists={filterList.categories}
          />
          <ProductFilter
            title="Furnitures Types"
            filterLists={filterList.types}
          />
        </section>
        {/*Product Card*/}
        <section className="w-full lg:w-4/5">
          <h1 className="mb-6 ml-3 text-2xl font-bold lg:ml-0">All Products</h1>
          <div className="grid grid-cols-1 gap-6 px-3 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
            <ProductCard products={products} />
          </div>
          {/*Pagination*/}
          <div className="mt-7">
            <PaginationButton />
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProductPage;
