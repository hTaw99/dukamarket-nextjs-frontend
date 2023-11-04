"use client";
import { useDispatch, useSelector } from "react-redux";
import Description from "../../Description";
import Reviews from "../../Reviews";
import {
  showDescription,
  showReview,
} from "@/store/features/productDetailSlice";
// import { Hydrate, useQuery } from "@tanstack/react-query";

const ProductDescription = ({ averageRating, numReviews, _id, children }) => {
  const dispatch = useDispatch();
  const { tapValue } = useSelector((state) => state.detail);
  return (
    <>
      <div className="flex border-b border-gray-300 mb-6">
        <h1
          className={
            tapValue === "description"
              ? "text-lg px-4 py-2 font-semibold border-b-2 border-red-500 "
              : "cursor-pointer text-lg px-4 py-2 hover:text-gray-900 text-gray-500"
          }
          onClick={() => dispatch(showDescription())}
        >
          Description
        </h1>
        <h1
          onClick={() => dispatch(showReview())}
          className={
            tapValue === "review"
              ? "text-lg px-4 py-2 font-semibold border-b-2 border-red-500 "
              : "cursor-pointer text-lg px-4 py-2 hover:text-gray-900 text-gray-500"
          }
        >
          Reviews
        </h1>
      </div>
      {tapValue === "review" ? children : <Description />}
    </>
  );
};

export default ProductDescription;
