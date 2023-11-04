import RatingStars from "@/app/utils/RatingStars";

export default async function RatingStarsWrapper({ productId }) {
  const resProduct = await fetch(
    `${process.env.SERVER}/api/products/${productId}`,
    {
      next: { tags: ["singleProduct"] },
    }
  );
  const { product } = await resProduct.json();
  console.log(product);
  return (
    <div className="flex  text-yellow-500 ">
      <RatingStars size={24} averageRating={product?.averageRating} />
    </div>
  );
}
