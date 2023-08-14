import React from "react";
// import { useGetBrands, useGetCategories } from "@/apis/public";
import Menu from "../Menu";

async function getCategories() {
  const res = await fetch(`${process.env.SERVER}/api/categories`);
  return res.json();
}
async function getBrands() {
  const res = await fetch(`${process.env.SERVER}/api/brands`);
  return res.json();
}

export default async function FiltersComponent() {
  const categories = await getCategories();
  const brands = await getBrands();

  // const { data: categories, isLoading: loadCategories } = useGetCategories();
  // const { data: brands, isLoading: loadBrands } = useGetBrands();
  // if (loadCategories || loadBrands) return <div>Loading ...</div>;
  return (
    <div className="flex gap-2 ">
      <Menu
        name="sort"
        multiple={false}
        options={[
          { _id: "-averageRating", name: "customer rating" },
          { _id: "name", name: "name" },
          { _id: "-createdAt", name: "newest" },
          { _id: "-price", name: "price-high to low" },
          { _id: "price", name: "price-low to high" },
          { _id: "-sold", name: "top-seller" },
        ]}
      />
      <Menu name="category" multiple={true} options={categories} />
      <Menu name="brand" multiple={true} options={brands} />
    </div>
  );
}
