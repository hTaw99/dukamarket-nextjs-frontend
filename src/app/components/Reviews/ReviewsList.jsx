import CustomImage from "@/app/utils/CustomImage";
import React from "react";
import imgReview from "@/assets/noReviewsFound.svg";
import Comment from "../Comment";

export default async function ReviewsList({ productId }) {
  const resReviews = await fetch(
    `${process.env.SERVER}/api/reviews?product=${productId}`,
    { next: { tags: ["reviews"] } }
  );
  const { reviews } = await resReviews.json();

  // key={Math.random()}
  return (
    <div className="flex flex-col gap-6" >
      {reviews?.length === 0 ? (
        <div className="flex  flex-col h-full gap-4 justify-center items-center">
          <CustomImage
            width={500}
            height={500}
            src={imgReview}
            className="w-[8%]"
            alt="No reviews on this product"
          />
          <h1 className="text-gray-800 text-center">
            No reviews on this product
          </h1>
        </div>
      ) : (
        reviews?.map((review) => (
          <Comment {...review} key={review._id} productId={productId} />
        ))
      )}
    </div>
  );
}
