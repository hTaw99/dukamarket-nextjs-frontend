"use client";

import { useGetProducts } from "@/apis/products";
import { useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";

import { Fragment } from "react";
import ProductItem from "../ProductItem";
import ProductCardSkeleton from "../CardItem/Skeleton";

const ProductsList = () => {
  const { filters } = useSelector((state) => state.filter);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useGetProducts({
    filters,
    queries: { limit: 12 },
  });


  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
        {isPending
          ? Array.from({ length: 12 }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))
          : data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.products.map((p) => (
                  <ProductItem {...p} key={p._id} />
                ))}
              </Fragment>
            ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center  ">
          <button
            onClick={() => fetchNextPage()}
            className="px-4 py-2 text-white bg-gray-600 rounded-md "
          >
            {isFetchingNextPage ? (
              <FaSpinner className=" animate-spin" />
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsList;
