"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const revalidateAction = async (id) => {
  // console.log(id);
  revalidatePath(`/products/${id}`);
  // revalidateTag("singleProduct");
  // revalidateTag("reviews");
};
