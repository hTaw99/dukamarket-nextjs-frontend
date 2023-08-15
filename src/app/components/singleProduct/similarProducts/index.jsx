import React from "react";
import Link from "next/link";
import ListItem from "../../ListItem";
import { TbChevronsRight } from "react-icons/tb";
import { getSimilarProducts, useGetSimilarProducts } from "@/apis/products";
import ListItemSkeleton from "../../ListItem/ListItemSkeleton";
import getQueryClient from "@/app/getQueryClient";

const SimilarProducts = async ({ productId, dehydratedState }) => {
  // const { data: similarProducts, isLoading } = useGetSimilarProducts({
  //   productId,
  //   limit: 3,
  // });

  const res = await fetch(
    `${process.env.SERVER}/api/products/${productId}/similar?limit=3`
  );
  const { products: similarProducts } = await res.json();

  // const queryClient = getQueryClient();
  // const { products: similarProducts } = await queryClient.fetchQuery({
  //   queryKey: [
  //     "get-similar-products",
  //     {
  //       productId,
  //       limit: 3,
  //     },
  //   ],
  //   queryFn: () =>
  //     getSimilarProducts({
  //       productId,
  //       limit: 3,
  //     }),
  // });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl text-gray-800 font-semibold ">
          Similar Products
        </h3>
        <div className="flex items-center text-red-500 font-semibold text-sm gap-1">
          <Link href="/products">See all products</Link>
          <TbChevronsRight />
        </div>
      </div>
      <div className="sm:grid-cols-2 grid lg:flex xl:flex-col gap-4">
        {/* md:grid-rows-[repeat(3,minmax(150px,33%))] */}

        {/* {isLoading
          ? Array.from({ length: 3 }, () => <ListItemSkeleton />)
          :  */}
        {similarProducts?.map((product) => (
          <ListItem key={product._id} product={product} />
        ))}

        {/* ))} */}
      </div>
    </div>
  );
};

export default SimilarProducts;
