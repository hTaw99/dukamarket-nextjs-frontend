"use client"

import { addProductToCompare } from "@/store/features/compareSlice";
import { openCompareModel } from "@/store/features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiLayer } from "react-icons/bi";

const CompareButton = ({
  title,
  image,
  price,
  id,
  description,
  colors,
  priceAfterDiscount,
  averageRating,
  numReviews,
}) => {
  const dispatch = useDispatch();
  const { productsToCompare } = useSelector((state) => state.compare);
  const selectedProduct = productsToCompare?.find((p) => p.sku === id);


  let obj = {
    image,
    title,
    sku: id,
    description,
    price: priceAfterDiscount ? priceAfterDiscount : price,
    colors: colors.map((c) => c.name).join(" - "),
    "numbers of reviews": `${numReviews} Reviews`,
    "average rating": averageRating,
  };

  // const obj = new Map([
  //   ["image", image],
  //   ["title", title],
  //   ["sku", id],
  //   [t("price"), priceAfterDiscount ? priceAfterDiscount : price],
  //   [t("colors"), colors.map((c) => c.name).join(" - ")],
  //   [(t("numbers-of-reviews"), `${numReviews} Reviews`)],
  //   [(t("average-rating"), averageRating)],
  // ]);

  // const newObj = Object.fromEntries(obj.entries());

  // (obj[t("price")] = priceAfterDiscount ? priceAfterDiscount : price),
  //   (obj[t("description")] = description),
  //   (obj[t("colors")] = colors.map((c) => c.name).join(" - ")),
  //   (obj[t("numbers-of-reviews")] = `${numReviews} Reviews`),
  //   (obj[t("average-rating")] = averageRating);

  return (
    <button
      onClick={() => {
        dispatch(addProductToCompare(obj));
        dispatch(openCompareModel());
      }}
      className="relative group/compare"
    >
      <div
        className={`bg-gray-100 rounded-md p-2 ${
          selectedProduct ? "bg-red-500 text-white" : "bg-gray-100"
        } hover:bg-red-500 hover:text-white cursor-pointer`}
      >
        <BiLayer size={24} />
      </div>
      <span className="bg-gray-500 text-white absolute top-8 right-[43px] -translate-y-full whitespace-nowrap  invisible opacity-0 px-2 py-1 text-sm rounded-md group-hover:visible group-hover/compare:opacity-100 transition pointer-events-none">
        Compare
      </span>
    </button>
  );
};

export default CompareButton;
