// import { products, filterList } from "@/data/products.ts";
import ProductCard from "@/components/products/ProductCard.tsx";
import ProductFilter from "@/components/products/ProductFilter.tsx";
// import PaginationButton from "@/components/products/Pagination.tsx";
import { useInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  categoryTypeQuery,
  productInfiniteQuery,
  // queryClient,
} from "@/api/query";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router";

function ProductPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawCategory = searchParams.get("categories");
  const rawType = searchParams.get("types");

  // decode & parse search params
  const selectedCategory = rawCategory
    ? decodeURIComponent(rawCategory)
        .split(",")
        .map((cat) => Number(cat.trim()))
        .filter((cat) => !isNaN(cat))
        .map((cat) => cat.toString())
    : [];

  const selectedType = rawType
    ? decodeURIComponent(rawType)
        .split(",")
        .map((type) => Number(type))
        .filter((type) => !isNaN(type))
        .map((type) => type.toString())
    : [];

  const cat = selectedCategory.length > 0 ? selectedCategory.join(",") : null;
  const typ = selectedType.length > 0 ? selectedType.join(",") : null;

  const { data: cateType } = useSuspenseQuery(categoryTypeQuery());

  const {
    status,
    data,
    error,

    isFetching,
    isFetchingNextPage,
    //   isFetchingPreviousPage,

    isFetchNextPageError,
    //   isFetchPreviousPageError,

    fetchNextPage,
    //   fetchPreviousPage,

    hasNextPage,
    //   hasPreviousPage,
    // refetch,
  } = useInfiniteQuery(productInfiniteQuery(cat, typ));

  const allProducts = data?.pages.flatMap((page) => page.products) ?? [];

  const handleFilterChange = (categories: string[], types: string[]) => {
    const newParams = new URLSearchParams();
    if (categories.length > 0) {
      newParams.set("categories", encodeURIComponent(categories.join(",")));
    }

    if (types.length > 0) {
      newParams.set("types", encodeURIComponent(types.join(",")));
    }
    // update URL & triggers refetch via query key
    setSearchParams(newParams);
    // cancel in-flight queries
    // queryClient.cancelQueries({ queryKey: ["products", "infinite"] });
    // clear cache
    // queryClient.removeQueries({ queryKey: ["products", "infinite"] });
    // refetch();
  };
  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className="container mx-auto">
      <section className="my-5 flex flex-col justify-between md:flex-col lg:flex-row">
        {/*Product Filter*/}
        <section className="w-full lg:w-1/5">
          <ProductFilter
            filterList={cateType}
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            onFilterChange={handleFilterChange}
          />
        </section>
        {/*Product Card*/}
        <section className="w-full lg:w-4/5">
          <h1 className="mb-6 ml-3 text-2xl font-bold lg:ml-0">All Products</h1>
          <div className="grid grid-cols-1 gap-6 px-3 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
            <ProductCard products={allProducts} />
          </div>
          {/*Pagination*/}
          {/* <div className="mt-7">
            <PaginationButton />
          </div> */}
          <div className="mt-3 text-center">
            <Button
              onClick={() => fetchNextPage()}
              disabled={
                !hasNextPage || isFetchNextPageError || isFetchingNextPage
              }
              variant={!hasNextPage ? "ghost" : "secondary"}
            >
              {isFetching
                ? "Loading..."
                : hasNextPage
                  ? "Load More"
                  : "No more products"}
            </Button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage ? "Background Updating" : null}
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProductPage;
