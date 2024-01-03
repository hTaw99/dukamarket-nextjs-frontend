"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import ReviewForm from "../ReviewForm";

export default function ReviewFormWrapper({ productId }) {
  const { isAuthenticated } = useSelector((state) => state.auth.user);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col gap-1 mb-4 ">
        <h1 className="text-lg md:text-xl text-gray-700 font-semibold">
          Review this product
        </h1>
        <p className="text-sm md:text-base">
          Share your thoughts with other customers
        </p>
      </div>
      {isAuthenticated ? (
        <ReviewForm productId={productId} />
      ) : (
        <button
          onClick={() => router.push(`/login?from=${pathname}`)}
          className="text-white bg-red-500 py-3 rounded-md self-stretch"
        >
          Add review
        </button>
      )}
    </>
  );
}
