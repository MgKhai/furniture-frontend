import {products, filterList} from "@/data/products.ts";
import ProductCard from "@/components/products/ProductCard.tsx";
import ProductFilter from "@/components/products/ProductFilter.tsx";
import PaginationButton from "@/components/products/Pagination.tsx";

function ProductPage(){
    return (
        <div className="container mx-auto">
            <section className="flex flex-col md:flex-col lg:flex-row  justify-between my-8">
                {/*Product Filter*/}
                <section className="w-full lg:w-1/5">
                    <ProductFilter title="Furnitures Made By" filterLists={filterList.categories} />
                    <ProductFilter title="Furnitures Types" filterLists={filterList.types} />
                </section>
                {/*Product Card*/}
                <section className="w-full lg:w-4/5">
                    <h1 className="text-2xl font-bold mb-6 ml-3 lg:ml-0">All Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-0">
                        <ProductCard products={products} />
                    </div>
                    {/*Pagination*/}
                    <div className="mt-7">
                        <PaginationButton/>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default ProductPage;