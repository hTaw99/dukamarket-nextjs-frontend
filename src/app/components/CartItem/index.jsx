"use client";

import { useRemoveItemFromCart } from "@/apis/cart";
import CustomImage from "@/app/utils/CustomImage";
import { formatPrice } from "@/app/utils/formatPrice";
import { BiTrash } from "react-icons/bi";

const CartItem = ({ amount, product, totalProductPrice, _id }) => {
  const { mutate: removeItemFromCart } = useRemoveItemFromCart();

  return (
    <div className=" p-4 pb-8 border-b border-gray-300 rounded-md flex gap-4">
      <div className="max-w-[150px] flex items-center justify-center self-start border rounded-md">
        <CustomImage
          src={product.images[0]}
          width={500}
          height={500}
          className="object-cover p-2 max-w-[90%]"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex justify-between gap-4  items-start mb-4">
          <h1 className="text-gray-800 lg:text-lg line-clamp-2 md:line-clamp-none font-semibold">
            {product.name}
          </h1>
          <button
            onClick={() => removeItemFromCart(_id)}
            className=" text-gray-600"
          >
            <BiTrash size={24} />
          </button>
        </div>
        {/* <p className="text-gray-500 text-sm lg:text-base mb-4">
          Monohydrate <br /> 30 serve <br /> micronized
        </p> */}
        <div className="flex justify-between gap-4 items-center">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className=" hover:bg-gray-300 cursor-pointer border rounded-md flex justify-center items-center aspect-square w-[30px] lg:w-[40px]">
              -
            </div>
            <h3 className="text-sm lg:text-base">{amount}</h3>
            <div className=" hover:bg-gray-300 cursor-pointer border rounded-md flex justify-center items-center aspect-square w-[30px] lg:w-[40px]">
              +
            </div>
          </div>
          <span className=" text-base lg:text-lg text-gray-800 ">
            {formatPrice(totalProductPrice)} <span>EGP</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
