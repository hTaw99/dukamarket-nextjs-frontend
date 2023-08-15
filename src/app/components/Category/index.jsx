import React from "react";
import CardItem from "../CardItem";
import CategoryList from "./CategoryList";
import CategoryProduct from "./CategoryProduct";
// import { useGetProducts } from "@/apis/products";
// import Skeleton from "../CardItem/Skeleton";
// import getQueryClient from "@/app/getQueryClient";
// import { getProducts } from "@/apis/products";
// import { dehydrate } from "@tanstack/query-core";
// import { Hydrate } from "@tanstack/react-query";

const Category = async ({ _id, name, images }) => {
  // #################################
  const res = await fetch(
    `${process.env.LOCAL}/api/products?limit=7&sort=-sold&category=${_id}`
  );
  const { products } = await res.json();
  // #################################

  const topSellerProduct = products.slice(0, 1)[0];
  const restProducts = products.slice(1);

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900 capitalize">
          {name}
        </h1>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr_1fr] rounded-md overflow-hidden">
        <CategoryList images={images} />

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 bg-gray-200 gap-[1px] border-r">
          {restProducts.map((p) => (
            <CardItem key={p._id} {...p} />
          ))}
        </div>

        <CategoryProduct {...topSellerProduct} />
      </div>
    </div>
  );
};

export default Category;
