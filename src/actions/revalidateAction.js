"use server";

import { revalidatePath, revalidateTag, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

export const revalidateAction = async (id) => {
  unstable_noStore();
  // console.log(id);
  revalidatePath(`/products/${id}`);
  revalidateTag("singleProduct");
  revalidateTag("reviews");
};
