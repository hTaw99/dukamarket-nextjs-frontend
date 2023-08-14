import { formatPrice } from "@/app//utils/formatPrice";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryProduct = ({
  _id,
  images,
  name,
  price,
  description,
  priceAfterDiscount,
}) => {
  return (
    <div className=" bg-white p-6">
      <Link
        href={`/products/${_id}`}
        className="flex justify-center items-center w-52 h-52  aspect-square m-auto"
      >
        <Image
          className=" w-4/5 aspect-square cursor-pointer hover:scale-110 transition-all duration-300"
          src={images[0]}
          alt=""
          width={500}
          height={500}
        />
      </Link>
      <div className="flex flex-col gap-2 py-6 my-6 border-b">
        <h1 className="text-blue-700 font-semibold capitalize">{name}</h1>
        <div className="flex items-center gap-2">
          <h3 className="text-red-500 font-semibold text-xl">
            {" "}
            EGP {formatPrice(priceAfterDiscount ? priceAfterDiscount : price)}
          </h3>
          {priceAfterDiscount && (
            <h3 className="text-gray-500 line-through">{formatPrice(price)}</h3>
          )}
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default CategoryProduct;
