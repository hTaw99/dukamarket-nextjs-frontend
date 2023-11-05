import { useState, useTransition } from "react";
import { FaSpinner } from "react-icons/fa";
import { disableEditing } from "@/store/features/reviewSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useUpdateReview } from "@/apis/reviews";
import { useDispatch } from "react-redux";
import { revalidateAction } from "@/actions/revalidateAction";

const EditableComment = ({
  comment,
  rating,
  title,
  isRecommended,
  _id,
  productId,
}) => {
  const [isPending, startTransition] = useTransition();
  const [ratingEdit, setRatingEdit] = useState(rating);
  const [isRecommendedEdit, setIsRecommendedEdit] = useState(isRecommended);
  const dispatch = useDispatch();
  const [titleEdit, setTitleEdit] = useState(title);
  const [commentEdit, setCommentEdit] = useState(comment);
  const { mutate: updateReview, isPending: isUpdatingReviewLoading } =
    useUpdateReview({
      onSettled: async () => await revalidateAction(productId),
    });

  const updateHandler = () => {
    updateReview({
      rating: ratingEdit,
      comment: commentEdit,
      title: titleEdit,
      isRecommended: isRecommendedEdit,
      product: _id,
    });
  };

  return (
    <div className={`flex items-start gap-2 border p-4 bg-gray-50 rounded-md `}>
      {/* <div className="h-14 bg-slate-200 rounded-full min-w-max">
    <img src={avatar} className="object-cover w-14" alt="" />
  </div> */}
      <div className="w-full">
        <div className=" flex justify-between">
          <div className="flex flex-col mb-6">
            <label className=" text-gray-400 mb-1" htmlFor="review-title-edit">
              Title:
            </label>
            <input
              onChange={(e) => setTitleEdit(e.target.value)}
              className="bg-ne p-2 border border-neutral-300 rounded-md outline-none"
              type="text"
              id="review-title-edit"
              value={titleEdit}
              // placeholder="Example: Easy To Use"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <p className=" text-gray-400 mb-1" htmlFor="review-title">
            Rating:
          </p>
          <div className="flex gap-2 text-gray-400">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <div
                    onClick={() => setRatingEdit(ratingValue)}
                    className={
                      ratingValue <= (ratingEdit || hover)
                        ? "cursor-pointer p-2 border bg-white border-neutral-300 rounded-md group "
                        : "cursor-pointer p-2 border bg-white border-neutral-300 rounded-md"
                    }
                  >
                    {ratingValue <= (ratingEdit || hover) ? (
                      <AiFillStar className={"text-yellow-500 "} size={24} />
                    ) : (
                      <AiOutlineStar
                        className={"group-hover:text-white"}
                        size={24}
                      />
                    )}
                  </div>
                  <input
                    type="radio"
                    className="hidden"
                    name="rating"
                    value={ratingValue}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <div>
            <p className=" text-gray-400 mb-1" htmlFor="review-title">
              Would you Recommend this product to a friend
            </p>
            <div className="flex gap-6">
              <div className="relative flex gap-2">
                <input
                  className="cursor-pointer appearance-none w-5 h-5 accent-red-500 rounded-full border border-neutral-300 checked:bg-red-500 checked:border-0"
                  type="radio"
                  id="yesEdit"
                  value="true"
                  name="recommended"
                  checked={isRecommendedEdit}
                  onChange={(e) =>
                    setIsRecommendedEdit(/true/.test(e.target.value))
                  }
                />
                <div className="pointer-events-none absolute w-2 h-2 bg-white rounded-full left-[6px] top-[6px]" />
                <label
                  className="cursor-pointer  font-semibold text-gray-700"
                  htmlFor="yesEdit"
                >
                  Yes
                </label>
              </div>

              <div className="relative flex gap-2 ">
                <input
                  className="cursor-pointer appearance-none w-5 h-5 accent-red-500 rounded-full border border-neutral-300 checked:bg-red-500 checked:border-0"
                  type="radio"
                  id="noEdit"
                  value="false"
                  name="recommended"
                  checked={!isRecommendedEdit}
                  onChange={(e) =>
                    setIsRecommendedEdit(/true/.test(e.target.value))
                  }
                />
                <div className="pointer-events-none absolute w-2 h-2 bg-white rounded-full left-[6px] top-[6px]" />
                <label
                  className="cursor-pointer  font-semibold text-gray-700"
                  htmlFor="noEdit"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className=" text-gray-400 mb-1" htmlFor="review-comment-edit">
            Comment:
          </label>
          <textarea
            onChange={(e) => setCommentEdit(e.target.value)}
            className="bg-ne p-2 border border-neutral-300 rounded-md outline-none"
            type="text"
            id="review-comment-edit"
            value={commentEdit}
            // placeholder="Example: Easy To Use"
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 text-gray-500"></p>

          <div className="flex gap-4">
            <button
              onClick={updateHandler}
              className="flex gap-2 items-center bg-red-500 justify-center px-4 py-2 w-40 rounded-md text-white "
            >
              {/* <FiEdit /> */}
              {isUpdatingReviewLoading ? (
                <FaSpinner className=" animate-spin" />
              ) : (
                "Update review"
              )}
            </button>
            <button
              onClick={() => dispatch(disableEditing())}
              className="flex gap-2 items-center text-neutral-800 px-4 py-2 rounded-md border border-neutral-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableComment;
