"use client";

import { useState, useEffect, Suspense } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openPictureModel } from "@/store/features/modelSlice";
import {
  setShownPicture,
  showReview,
} from "@/store/features/productDetailSlice";
import RatingStars from "@/app/utils/RatingStars";
import AddToCartButton from "@/app/utils/AddToCartButton";
import { formatPrice } from "@/app/utils/formatPrice";
import Image from "next/image";
import { setAsViewedProduct } from "@/store/features/recentlyViewedProductsSlice";
import { useGetSingleProduct } from "@/apis/products";
import CustomImage from "@/app/utils/CustomImage";

const ProductDetail = ({
  // _id,
  productId,
  category,
  description,
  images,
  name,
  numReviews,
  price,
  colors,
  priceAfterDiscount,
  averageRating,
}) => {
  const [amount, setAmount] = useState(1);

  
  // const { data: product } = useGetSingleProduct(_id);
  const [colorChoosed, setColorChoosed] = useState(colors?.[0]?.name);

  const dispatch = useDispatch();
  const addReviewHandler = () => {
    dispatch(showReview());

    setTimeout(() => {
      window.scroll({
        top: 860,
        behavior: "smooth",
      });
    }, 1);
  };

  useEffect(() => {
    dispatch(
      setAsViewedProduct({
        name: `${name.substring(0, 40)}...`,
        image: images[0],
        price: price,
        _id: productId,
      })
    );
  }, []);

  const shownPicture = useSelector((state) => state.detail.shownPicture);

  useEffect(() => {
    dispatch(setShownPicture(images[0]));
    setColorChoosed(colors?.[0]?.name);
  }, [images[0], colors?.[0]?.name]);

  return (
    <>
      <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-8">
        {/* --------- IMG ----------- */}
        {shownPicture && (
          <div className="flex flex-col gap-4 ">
            <div
              className=" border p-4 border-gray-300 flex justify-center items-center w-full h-48 lg:h-full aspect-square rounded-md overflow-hidden cursor-zoom-in "
              onClick={() => dispatch(openPictureModel())}
            >
              <CustomImage
                className="w-4/5 h-4/5 aspect-square object-contain"
                width={500}
                height={500}
                src={shownPicture}
                priority
                alt=""
              />
            </div>
            <div className="flex gap-4">
              {images?.map((image) => (
                <div
                  key={image}
                  className={`border rounded-md cursor-pointer p-2 w-[70px] h-[70px] overflow-hidden ${
                    image === shownPicture
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => {
                    dispatch(setShownPicture(image));
                  }}
                >
                  <CustomImage
                    width={100}
                    height={100}
                    className="w-full h-full object-contain "
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* --------- Details ----------- */}
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-2xl font-semibold text-blue-700 mb-4">
            {name}
          </h1>
          <div className="flex mb-4 items-center gap-4">
            <div className="flex text-yellow-500 ">
              <RatingStars averageRating={averageRating} />
            </div>
            <p className="text-gray-400 text-xs lg:text-sm px-4 border-r border-l">
              {numReviews} review
            </p>
            <button
              className="text-gray-400 text-xs lg:text-sm capitalize hover:text-red-500"
              onClick={addReviewHandler}
            >
              Add your review
            </button>
          </div>
          <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-gray-800 font-semibold text-2xl lg:text-3xl flex justify-start gap-1">
              <span className="text-base font-medium">EGP</span>{" "}
              {formatPrice(priceAfterDiscount || price)}
            </h3>
            {priceAfterDiscount && (
              <h3 className="text-gray-500 line-through text-lg lg:text-xl">
                {formatPrice(price)}
                <span className="">EGP</span>
              </h3>
            )}
          </div>
          <ul className="text-sm lg:text-base mb-6 text-gray-500">
            <li>{description}</li>
          </ul>
          <div className=" mb-6 pb-6 border-b border-gray-200 flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              <AddToCartButton
                amount={amount}
                color={colors?.find((color) => color.name === colorChoosed)?._id}
                productId={productId}
              />
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setAmount((perv) => {
                      if (perv > 1) {
                        return perv - 1;
                      } else {
                        return 1;
                      }
                    })
                  }
                  className=" hover:bg-gray-100 cursor-pointer h-full border border-gray-300 rounded-md flex justify-center items-center w-[48px]"
                >
                  -
                </button>
                <h3>{amount}</h3>
                <button
                  onClick={() => setAmount((perv) => perv + 1)}
                  className=" hover:bg-gray-100 cursor-pointer h-full border border-gray-300 rounded-md flex justify-center items-center w-[48px]"
                >
                  +
                </button>
              </div>
            </div>

            {/* colors */}
            <div>
              <h1 className="mb-1">Colors</h1>
              <div className="flex ">
                {colors?.map((color) => (
                  <div
                    key={color._id}
                    style={{
                      border:
                        colorChoosed === color.name
                          ? `solid 2px ${color.name}`
                          : "none",
                    }}
                    className={`p-1 rounded-lg `}
                  >
                    <div
                      onClick={() => setColorChoosed(color.name)}
                      style={{
                        backgroundColor: color.name,
                      }}
                      className={`cursor-pointer w-6 h-6 border-red-500 rounded-md`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            {/* colors */}
          </div>

          <div className="text-sm lg:text-base grid grid-cols-[1fr_2fr]">
            <p>SKU:</p>
            <p className="text-gray-500">{productId}</p>
            <p>Category:</p>
            <p className="text-gray-500 capitalize">{category?.name}</p>
            <p>Tags:</p>
            <p className="text-gray-500">Digital, Headphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
