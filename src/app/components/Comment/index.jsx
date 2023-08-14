"use client"

import { FiEdit } from "react-icons/fi";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiFillCheckCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import RatingStars from "@/app/utils/RatingStars";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteReview } from "@/apis/reviews";
import { enableEditing } from "@/store/features/reviewSlice";
import EditableComment from "./EditableComment";

const Comment = ({
  comment,
  rating,
  createdAt,
  title,
  isRecommended,
  user,
  _id,
}) => {
  const date = createdAt.split("T");
  const { name } = useSelector((state) => state.auth.user);
  const { isEditing } = useSelector((state) => state.review);

  const { mutate: deleteReview, isLoading } = useDeleteReview();
  const dispatch = useDispatch();

  const isMyOwnReview = user?.name === name;

  if (isEditing) {
    if (isMyOwnReview) {
      return (
        <EditableComment
          comment={comment}
          rating={rating}
          title={title}
          isRecommended={isRecommended}
          _id={_id}
        />
      );
    }
  }

  return (
    <div
      className={`flex items-start gap-2 border-b pb-4 px-4 rounded-md ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <div className="w-full">
        <div className=" flex justify-between">
          <h1 className="text-gray-800 capitalize text-lg font-bold">
            {title}
          </h1>
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <AiFillCheckCircle color="green" />
            Verified reviewer
          </p>
        </div>
        <div className="flex text-yellow-500 mb-1">
          <RatingStars averageRating={rating} />
        </div>
        <p className="text-gray-400 mb-3">{date[0]}</p>
        <p className="text-lg flex-wrap mb-6">{comment}</p>
        <div className="flex md:flex-row flex-col gap-4 justify-between md:items-center">
          <p className="flex items-center gap-2 text-sm md:text-base text-gray-500">
            {isRecommended ? (
              <>
                <AiOutlineCheckCircle /> Yes, I recommend this product
              </>
            ) : (
              <>
                <AiOutlineCloseCircle />
                No, I don`t recommend this product
              </>
            )}
          </p>

          {isMyOwnReview && (
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(enableEditing())}
                className="flex text-sm gap-2 items-center px-2 py-3 md:px-4 md:py-2 rounded-md border border-neutral-300"
              >
                <FiEdit />
                Edit review
              </button>
              <button
                onClick={() => deleteReview(_id)}
                className="flex gap-2 text-sm items-center md:px-4 md:py-2 text-red-500  rounded-md "
              >
                <AiOutlineDelete />
                Delete review
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
