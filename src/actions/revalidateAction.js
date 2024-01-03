"use server";

import { revalidatePath, revalidateTag, unstable_noStore } from "next/cache";

export const revalidateAction = async (id) => {
  // console.log(id);
  revalidatePath(`/products/[id]`);
  revalidateTag("singleProduct");
  revalidateTag("reviews");
};
