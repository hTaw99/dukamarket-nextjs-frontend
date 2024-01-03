import RatingStars from "@/app/utils/RatingStars";
import { wait } from "@/app/utils/wait";


export default async function Test({ productId }) {

  const resProduct = await fetch(
    `${process.env.SERVER}/api/products/${productId}`,
    {
      next: { tags: ["singleProduct"] },
    }
  );
  const { product } = await resProduct.json();

  return (
    <>
      <div>
        <h1 className="md:text-lg text-neutral-700">
          {product?.averageRating.toFixed(1)}
          <span className=""> out of 5</span>
        </h1>
        <h3 className="text-xs md:text-sm text-gray-500">
          {product?.numReviews} Reviews
        </h3>
      </div>
      <div className="flex  text-yellow-500 ">
        <RatingStars size={24} averageRating={product?.averageRating} />
      </div>
    </>
  );
}
