"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const addReview = async (data, accessToken) => {
  console.log({ accessToken });
  try {
    const resReviews = await fetch(`${process.env.SERVER}/api/review`, {
      next: { tags: ["reviews"], revalidate: 10 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const res = await resReviews.json();
    console.log({ res });
    revalidateTag("singleProduct");
    revalidateTag("reviews");
    return res;
  } catch (err) {
    console.log({ err });
    return err;
  }
};
