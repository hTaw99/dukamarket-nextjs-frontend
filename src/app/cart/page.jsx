// "use client";

import { getCart, useGetCart } from "@/apis/cart";
import getQueryClient from "../getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import CartClient from "../components/CartClient";
// import { revalidateTag } from "next/cache";

const Cart = async () => {
  const cartId = cookies().get("cart_id")?.value;
  // async function getCart() {
  //   const res = await fetch(
  //     `http://localhost:5000/api/carts${cartId ? `?cartId=${cartId}` : ""}`,
  //     {
  //       cache: "no-store",
  //       next: { tags: ["cart"] },
  //     }
  //   );
  //   return res.json();
  // }
  // const  = cookies().get("cart_id")?.value

  // console.log();
  // #######################################################
  // const { data: cartQuery } = useGetCart();

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["get-cart"],
    queryFn: () => getCart(cartId),
  });

  const dehydratedState = dehydrate(queryClient);
  // #######################################################

  return (
    <div className="container flex flex-col h-screen lg:grid lg:grid-cols-[3fr_1fr] gap-4">
      <Hydrate state={dehydratedState}>
        <CartClient />
      </Hydrate>
    </div>
  );
};

export default Cart;
