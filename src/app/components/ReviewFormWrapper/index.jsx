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
