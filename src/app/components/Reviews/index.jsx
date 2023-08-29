// "use client";

import Comment from "../Comment";
import RatingStars from "@/app/utils/RatingStars";
import { useGetAllReviews } from "@/apis/reviews";
import ReviewForm from "../ReviewForm";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import imgReview from "@/assets/noReviewsFound.svg";
import { useGetSingleProduct } from "@/apis/products";
import CustomImage from "@/app/utils/CustomImage";

const Reviews = ({ _id }) => {
  const { data } = useGetAllReviews(_id);
  const { data: product } = useGetSingleProduct(_id);
  const { isAuthenticated } = useSelector((state) => state.auth.user);
  const router = useRouter();
  const pathname = usePathname();

  const allRating = data?.reviews?.map((el) => el.rating);
  const ratingObj = allRating?.reduce(
    (acc, el, i) => ((acc[el] = acc[el] + 1 || 1), acc),
    {}
  );

  return (
    <div className="grid md:grid-cols-[2fr_4fr] gap-8  md:gap-20 ">
      <div className="flex flex-col">
        <h1 className="md:text-xl text-lg text-gray-700 font-semibold">
          Customer reviews
        </h1>
        <div className="pb-6 mb-6 border-b border-gray-300">
          <div className="flex gap-4 items-start mb-4">
            <div>
              <h1 className="md:text-lg text-neutral-700">
                {product?.averageRating} <span className="">out of 5</span>{" "}
              </h1>
              <h3 className="text-xs md:text-sm text-gray-500">
                {product?.numReviews} Reviews
              </h3>
            </div>
            <div className="flex  text-yellow-500 ">
              <RatingStars size={24} averageRating={product?.averageRating} />
            </div>
          </div>

          {Array.from({ length: 5 }, (el, i) => (
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
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-4 ">
          <h1 className="text-lg md:text-xl text-gray-700 font-semibold">
            Review this product
          </h1>
          <p className="text-sm md:text-base">
            Share your thoughts with other customers
          </p>
        </div>
        {isAuthenticated ? (
          <ReviewForm _id={_id} />
        ) : (
          <button
            onClick={() => router.push(`/login?from=${pathname}`)}
            className="text-white bg-red-500 py-3 rounded-md self-stretch"
          >
            Add review
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {/* {isLoading && <h1>Loading...</h1>} */}
        {data?.reviews.length === 0 ? (
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
          data?.reviews?.map((review) => (
            <Comment {...review} key={review._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
