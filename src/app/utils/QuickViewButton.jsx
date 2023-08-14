"use client"

import { useDispatch, useSelector } from "react-redux";
import { openQuickViewModel } from "@/store/features/modelSlice";
import { setProductToView } from "@/store/features/quickViewSlice";
import { AiOutlineEye } from "react-icons/ai";

const QuickViewButton = ({
  title,
  image,
  price,
  id,
  description,
  colors,
  priceAfterDiscount,
  averageRating,
  numReviews,
  icon = false,
}) => {
  const dispatch = useDispatch();
  const { isQuickViewModelOpen } = useSelector((state) => state.model);

  const quickViewHandler = () => {
    dispatch(openQuickViewModel());
    
    dispatch(
      setProductToView({
        title,
        image,
        price,
        id,
        description,
        colors,
        priceAfterDiscount,
        averageRating,
        numReviews,
      })
    );
  };
  return (
    <>
      {icon ? (
        <button onClick={quickViewHandler} className="relative group/quickview">
          <div className="bg-gray-100 rounded-md p-2 hover:bg-red-500 hover:text-white cursor-pointer">
            <AiOutlineEye size={24} />
          </div>
          <span className="bg-gray-500 text-white absolute z-50 top-8 right-[43px] -translate-y-full whitespace-nowrap  invisible opacity-0 px-2 py-1 text-sm rounded-md group-hover/quickview:visible group-hover/quickview:opacity-100 transition pointer-events-none">
            Quick View
          </span>
        </button>
      ) : (
        <button
          onClick={quickViewHandler}
          className="text-neutral-700 inner-border-2 py-3 inner-border-gray-300 font-semibold text-sm rounded-md  flex-1"
        >
          Quick view
        </button>
      )}
    </>
  );
};

export default QuickViewButton;
