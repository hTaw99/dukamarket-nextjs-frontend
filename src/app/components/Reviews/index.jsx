import Comment from "../Comment";
import RatingStars from "@/app/utils/RatingStars";
import { getAllReviews } from "@/apis/reviews";
import imgReview from "@/assets/noReviewsFound.svg";
import { getProduct } from "@/apis/products";
import CustomImage from "@/app/utils/CustomImage";
import ReviewFormWrapper from "../ReviewFormWrapper";
import Test from "./Test";
import { Suspense } from "react";
import ReviewsList from "./ReviewsList";
import { wait } from "@/app/utils/wait";

const Reviews = async ({ productId }) => {
  // ###################################################
  // const resReviews = await fetch(
  //   `${process.env.SERVER}/api/reviews?product=${_id}`,
  //   { next: { tags: ["reviews"] } }
  // );
  // const { reviews } = await resReviews.json();

  // const resProduct = await fetch(`${process.env.SERVER}/api/products/${_id}`, {
  //   next: { tags: ["singleProduct"] },
  // });
  // const { product } = await resProduct.json();
  // ###################################################

  // const { reviews } = await getAllReviews(_id);
  // const { product } = await getProduct(_id);
  // const { data } = useGetAllReviews(_id);
  // const { data: product } = useGetSingleProduct(_id);

  // const allRating = reviews?.map((el) => el.rating);
  // const ratingObj = allRating?.reduce(
  //   (acc, el, i) => ((acc[el] = acc[el] + 1 || 1), acc),
  //   {}
  // );

  return (
    <div className="grid md:grid-cols-[2fr_4fr] gap-8  md:gap-20 ">
      <div className="flex flex-col">
        <h1 className="md:text-xl text-lg text-gray-700 font-semibold">
          Customer reviews
        </h1>
        <div className="pb-6 mb-6 border-b border-gray-300">
          <div className="flex gap-4 items-start mb-4">
            <Suspense fallback={"loading Rating..."}>
              <Test productId={productId} />
            </Suspense>
          </div>
          {/* {Array.from({ length: 5 }, (el, i) => (
            <div key={i} className="flex gap-4 items-center mb-2">
              <h3>{i + 1} star</h3>
              <div className="w-36  h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-full bg-yellow-500 rounded-full`}
                  style={{
                    width: `${Math.trunc(
                      (ratingObj[i + 1] / allRating.length) * 100 || 0
                    )}%`,
                  }}
                ></div>
              </div>
              <h3>
                {Math.trunc((ratingObj[i + 1] / allRating.length) * 100 || 0)}%
              </h3>
            </div>
          ))} */}
        </div>

        <ReviewFormWrapper productId={productId} />
      </div>

      <Suspense fallback={"loading List Reviews..."}>
        <ReviewsList productId={productId} />
      </Suspense>
    </div>
  );
};

export default Reviews;
