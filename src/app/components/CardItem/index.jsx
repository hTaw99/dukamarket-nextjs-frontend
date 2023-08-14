"use client";

import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import AddToCartButton from "@/app/utils/AddToCartButton";
import QuickViewButton from "@/app/utils/QuickViewButton";
import CompareButton from "@/app/utils/CompareButton";
import { formatPrice } from "@/app/utils/formatPrice";
import RatingStars from "@/app/utils/RatingStars";
import Image from "next/image";

const CardItem = ({
  name,
  images,
  price,
  _id,
  description,
  colors,
  averageRating,
  priceAfterDiscount,
  numReviews,
}) => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 100,
        }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="bg-white group relative flex flex-col p-6 lg:p-4  "
      >
        {/* sale */}
        {priceAfterDiscount && (
          <div className=" absolute z-10 text-sm px-3 text-white rounded-md bg-green-600">
            <p>-{(((price - priceAfterDiscount) / price) * 100).toFixed()}%</p>
          </div>
        )}
        {/* image */}
        <div className="relative overflow-hidden self-center mb-2">
          <Link
            href={`products/${_id}`}
            className=" flex justify-center items-center w-40 h-40 md:w-48 md:h-48 aspect-square "
          >
            <Image
              className="p-2 w-4/5 cursor-pointer aspect-square object-contain group-hover:scale-110 transition-all duration-300"
              src={images[0]}
              alt="product-img"
              width={300}
              height={300}
            />
          </Link>
          {/* on hover icons */}
          <div className="flex flex-col  gap-2 absolute top-0 -right-10 group-hover:right-0 transition-all duration-300 text-gray-500">
            <QuickViewButton
              title={name}
              image={images[0]}
              price={price}
              id={_id}
              description={description}
              colors={colors}
              priceAfterDiscount={priceAfterDiscount}
              averageRating={averageRating}
              numReviews={numReviews}
              icon={true}
            />

            <button className="relative group/wishlist">
              <div className="bg-gray-100 rounded-md p-2  hover:bg-red-500 hover:text-white cursor-pointer">
                <AiOutlineHeart size={24} />
              </div>
              <span className="bg-gray-500 text-white absolute top-8 right-[43px] -translate-y-full whitespace-nowrap  invisible opacity-0 px-2 py-1 text-sm rounded-md group-hover:visible group-hover/wishlist:opacity-100 transition pointer-events-none">
                WishList
              </span>
            </button>

            <CompareButton
              title={name}
              image={images[0]}
              price={price}
              id={_id}
              description={description}
              colors={colors}
              priceAfterDiscount={priceAfterDiscount}
              averageRating={averageRating}
              numReviews={numReviews}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-2">
          {/* ------------- Title --------------- */}
          <Link href={`products/${_id}`}>
            <h1 className="text-blue-700 font-semibold capitalize line-clamp-2">
              {name}
            </h1>
          </Link>
          {/* ------------- Stars --------------- */}

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500 ">
              <RatingStars averageRating={averageRating} />
            </div>
          </div>
        </div>

        {/* -------------- price ------------------ */}
        <div className="flex items-center flex-wrap gap-2">
          <h3 className="text-neutral-900 font-semibold flex justify-start gap-1 text-xl mb-4">
            <span className="text-sm font-light">EGP</span>
            {formatPrice(priceAfterDiscount || price)}
          </h3>
          {priceAfterDiscount ? (
            <h3 className="text-neutral-500  text-lg line-through  mb-4 flex items-start gap-1">
              {formatPrice(price)}
            </h3>
          ) : null}
        </div>

        {/* -------------- button ------------------ */}
        <div className="mt-auto w-full">
          <AddToCartButton color={colors[0]._id} productId={_id} />
        </div>
      </motion.div>
    </>
  );
};

export default CardItem;
