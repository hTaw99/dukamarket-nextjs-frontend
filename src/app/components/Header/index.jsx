"use client";

import { BsHandbag } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { VscSignIn } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { openCartSideModel } from "@/store/features/modelSlice";
import { useQueryClient } from "@tanstack/react-query";
import AccountMenu from "./AccountMenu";
// import { useTranslation } from "react-i18next";
import { useGetProducts } from "@/apis/products";
import { useEffect, useRef, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { ImSpinner8 } from "react-icons/im";
// import { clearHistory } from "@/store/features/recentlyViewedProductsSlice";
import { formatPrice } from "../../utils/formatPrice";
import Link from "next/link";
import { useGetCart } from "@/apis/cart";
import { clearHistory } from "@/store/features/recentlyViewedProductsSlice";
import imgLogo from "@/assets/logo.svg";
import Image from "next/image";
import CustomImage from "@/app/utils/CustomImage";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();
  const { name, isAuthenticated } = useSelector((state) => state.auth.user);

  // #####################################################
  const {
    data: cartQuery,
    isPending,
    isFetching: isCartFetching,
  } = useGetCart();
  // #####################################################

  // const { t, i18n } = useTranslation(["header"]);

  return (
    <>
      <header className="bg-[#181F2B] py-6 ">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-4 items-center justify-between text-white">
          <Link href="/" className="order-1 w-40 block">
            <Image src={imgLogo} alt="Dujamarket logo" />
          </Link>
          {/* Search bar */}
          <SearchBar />
          <div className="flex gap-4 md:gap-8 items-center text-sm order-2 md:order-3">
            {isAuthenticated ? (
              <AccountMenu name={name} />
            ) : (
              <div>
                <h3 className="hidden md:block text-neutral-400 capitalize">
                  my account
                </h3>
                <Link className=" capitalize" href="/login">
                  <VscSignIn className="md:hidden" size={30} />

                  <span className="hidden md:block">sign in</span>
                </Link>
              </div>
            )}

            <div className="capitalize  hidden">
              <h3 className=" text-neutral-400">favourite</h3>
              <h2>my wishlist</h2>
            </div>

            <button
              className="flex items-center gap-3"
              onClick={() => dispatch(openCartSideModel())}
            >
              <div className="relative ">
                <BsHandbag className="w-7 h-7 md:w-8 md:h-8" />
                <span
                  className={`absolute -top-2 -left-2  bg-red-500 w-5 h-5 md:h-6 md:w-6 flex justify-center items-center rounded-full`}
                >
                  {cartQuery?.cart?.totalItems || 0}
                </span>
              </div>
              <div className="hidden md:block">
                <h3 className="capitalize text-left text-neutral-400">
                  your cart
                </h3>
                {isCartFetching ? (
                  <p className="h-5 rounded-sm w-20 animate-pulse bg-gray-700"></p>
                ) : (
                  <h2>
                    {formatPrice(cartQuery?.cart?.totalPrice || 0)}
                    <span className="ml-1 text-sm">EGP</span>
                  </h2>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
