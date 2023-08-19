"use client";

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  return formatter.format(price);
};
