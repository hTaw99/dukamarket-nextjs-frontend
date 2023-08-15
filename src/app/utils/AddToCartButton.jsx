"use client"

import { useAddToCart } from "@/apis/cart";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
const AddToCartButton = ({ amount = 1, color, productId }) => {
  const { mutate: addToCart, isLoading, isSuccess } = useAddToCart();
  const [isAddedEnd, setIsAddedEnd] = useState(false);

  console.log();

  useEffect(() => {
    setIsAddedEnd(false);
    if (isSuccess) {
      const id = setTimeout(() => setIsAddedEnd(true), 500);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isSuccess]);

  return (
    <button
      onClick={() =>
        addToCart({
          amount: amount,
          color,
          productId,
        })
      }
      className={` w-full relative flex justify-center items-center ${
        isLoading || isSuccess ? "min-h-[44px]" : ""
      } text-white text-center capitalize font-semibold text-sm bg-red-500 py-3 mt-auto flex-1 rounded-md`}
    >
      {isLoading ? (
        <FaCircle size={10} className=" animate-bounced" />
      ) : isSuccess && !isAddedEnd ? (
        <>
          <BsCheck size={24} className="absolute" />
        </>
      ) : (
        <span>add to cart</span>
      )}
    </button>
  );
};

export default AddToCartButton;
