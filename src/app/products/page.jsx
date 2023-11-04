import FiltersComponent from "./components/Filters";
import SelectedFiltersComponent from "./components/SelectedFilters";
import ProductsList from "./components/ProductsList";
import getQueryClient from "@/app/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { getProducts } from "@/apis/products";

export const metadata = {
  title: "Dukamarket - Products",
  description:
    "Products page have several product items that may you intersted in ",
};

export const revalidate = 10;
const Products = async () => {
  // const initialData = await getProducts({
  //   pageParam: 1,
  //   queryKey: [
  //     0,
  //     {
  //       filters: { sort: "", category: [], brand: [] },
  //       queries: { limit: 12 },
  //     },
  //   ],
  // });

  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [
      "get-products",
      {
        filters: { sort: "", category: [], brand: [] },
        queries: { limit: 12 },
      },
    ],
    queryFn: getProducts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="container mx-auto bg-white rounded-md p-6">
      <h1 className="mb-12 text-2xl md:text-3xl font-semibold">All Products</h1>
      <div className="pb-4 border-b border-gray-300 ">
        <div className="flex items-center overflow-x-auto  text-sm md:text-base justify-between mb-2">
          <FiltersComponent />
        </div>
        <SelectedFiltersComponent />
      </div>

      <HydrationBoundary state={dehydratedState}>
        <ProductsList />
      </HydrationBoundary>
    </div>
  );
};

export default Products;
