import Image from "next/image";
import AddToCartButton from "../../utils/AddToCartButton";
import QuickViewButton from "../../utils/QuickViewButton";
import { formatPrice } from "../../utils/formatPrice";
import Link from "next/link";

const ListItem = ({ product }) => {
  return (
    <div className="group flex  gap-4 p-4  border border-gray-300 rounded-md">
      <Link
        href={`/products/${product?._id}`}
        className="self-center w-20 h-20 aspect-square"
      >
        <Image
          width={100}
          height={100}
          className="w-full aspect-square h-full object-contain group-hover:scale-110 transition-all duration-300"
          src={product?.images[0]}
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between gap-2 ">
          <Link
            href={`/products/${product?._id}`}
            className="hover:text-blue-600 text-gray-700 font-semibold capitalize mb-4 text-sm md:text-base line-clamp-2"
          >
            {product?.name}
          </Link>
          <p className="hidden lg:inline-block text-green-600 text-xs flex-shrink-0">
            {product.quantity} in stock
          </p>
        </div>

        {/* ----------- price ------------- */}
        <div className="flex flex-wrap items-center mb-2 gap-2">
          <h3 className="text-gray-700  font-semibold text-sm md:text-base">
            {formatPrice(product?.priceAfterDiscount || product?.price)}
            <span className="font-medium"> EGP</span>{" "}
          </h3>

          {product.priceAfterDiscount && (
            <h3 className="text-gray-500 line-through  justify-start gap-1">
              {formatPrice(product?.price)}
              <span className=" text-xs md:text-base"> EGP</span>{" "}
            </h3>
          )}
        </div>
        {/* ----------- price ------------- */}

        {/* ----------- buttons ------------- */}
        <div className="hidden  justify-between gap-2 mt-auto">
          <div className="hidden">
            <AddToCartButton
              color={product.colors[0]._id}
              productId={product._id}
            />
          </div>
          <div className="hidden">
            <QuickViewButton
              title={product.name}
              image={product.images[0]}
              price={product.price}
              id={product._id}
              description={product.description}
              colors={product.colors}
              priceAfterDiscount={product.priceAfterDiscount}
              averageRating={product.averageRating}
              numReviews={product.numReviews}
            />
          </div>
        </div>
        {/* ----------- buttons ------------- */}
      </div>
    </div>
  );
};

export default ListItem;
