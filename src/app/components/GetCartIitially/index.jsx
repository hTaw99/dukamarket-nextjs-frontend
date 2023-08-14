"use client";

import { useGetCart } from "@/apis/cart";

const GetCartIitially = ({ children }) => {
  const {data} = useGetCart();

  return [children];
};

export default GetCartIitially;
