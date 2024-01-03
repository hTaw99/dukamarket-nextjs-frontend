"use client";

import { formatPrice } from "@/app/utils/formatPrice";

const Price = ({ priceAfterDiscount, price }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 mb-4">
      <p className="text-neutral-900 font-semibold flex justify-start gap-1 text-xl">
        <span className="text-sm font-light">EGP</span>
        {formatPrice(priceAfterDiscount || price)}
      </p>
      {priceAfterDiscount && (
        <p className="text-neutral-500  text-lg line-through flex items-start gap-1">
          {formatPrice(price)}
        </p>
      )}
    </div>
  );
};

export default Price;
