import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import RatingStars from "@/app/utils/RatingStars";
import AddToCartButton from "@/app/utils/AddToCartButton";
import QuickViewButton from "@/app/utils/QuickViewButton";
import CompareButton from "@/app/utils/CompareButton";
import Price from "@/app/utils/Price";
import Sale from "@/app/utils/Sale";
import CustomImage from "@/app/utils/CustomImage";

const ProductItem = ({
  _id,
  name,
  price,
  images,
  description,
  numReviews,
  colors,
  averageRating,
  priceAfterDiscount,
}) => {
  return (
    <div className="flex group flex-col border-r p-4">
      <div className="relative overflow-hidden flex flex-col mb-2 ">
        <Sale priceAfterDiscount={priceAfterDiscount} price={price} />
        <Link
          href={`/products/${_id}`}
          className="flex  justify-center items-center mx-auto w-[150px] h-[150px]  md:w-[230px] md:h-[230px] aspect-square"
        >
          <CustomImage
            className="mix-blend-multiply opacity-0 cursor-pointer object-contain group-hover:scale-110 transition-all duration-300 w-4/5 aspect-square"
            src={images[0]}
            width={500}
            height={500}
            alt="product-img"
          />
        </Link>
        {/* onHover Container */}
        <div className="flex flex-col gap-2 absolute top-0 -right-10 group-hover:right-0 transition-all duration-300 text-gray-500">
          <div className="relative group/wishlist">
            <div className="bg-gray-100 rounded-md p-2 hover:bg-red-500 hover:text-white cursor-pointer">
              <AiOutlineHeart size={24} />
            </div>
            <span className="bg-gray-500 text-white absolute top-8 right-[43px] -translate-y-full whitespace-nowrap  invisible opacity-0 px-2 py-1 text-sm rounded-md group-hover:visible group-hover/wishlist:opacity-100 transition pointer-events-none">
              WishList
            </span>
          </div>
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
      {/* ---------- Title & Stars ------------ */}
      <div className="flex flex-col gap-2 mb-2">
        {/* ---------- Title ------------ */}
        <h1 className="text-sm md:text-base text-blue-700 font-semibold capitalize line-clamp-2">
          {name}
        </h1>
        {/* ---------- Stars ------------ */}
        <div className="flex items-center justify-between gap-2 ">
          <div className="flex text-yellow-500  ">
            <RatingStars averageRating={averageRating} />
          </div>
          <div className="text-gray-400 text-xs md:text-sm">
            <p>{numReviews} review</p>
          </div>
        </div>
      </div>
      {/* price */}
      <Price price={price} priceAfterDiscount={priceAfterDiscount} />

      {/* Buttons */}
      <div className="mt-auto flex flex-col gap-2">
        <AddToCartButton color={colors[0]._id} productId={_id} />
        <QuickViewButton
          id={_id}
          title={name}
          price={price}
          image={images[0]}
          description={description}
          numReviews={numReviews}
          colors={colors}
          averageRating={averageRating}
          priceAfterDiscount={priceAfterDiscount}
        />
      </div>
    </div>
  );
};

export default ProductItem;
