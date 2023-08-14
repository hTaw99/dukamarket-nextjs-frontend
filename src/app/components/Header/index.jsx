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

const Header = () => {
  const dispatch = useDispatch();
  const { name, isAuthenticated } = useSelector((state) => state.auth.user);

  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 700);

  const queries = {
    name: debouncedValue,
  };
  const { data, isFetching } = useGetProducts({
    queries,
    enabled: !!debouncedValue,
  });

  const [isListOpen, setIsListOpen] = useState(false);

  // #####################################################
  const { data: cartQuery } = useGetCart();
  // #####################################################

  const { recentlyViewedProducts } = useSelector((state) => state.history);

  // const { t, i18n } = useTranslation(["header"]);

  const clearHistoryHandler = () => {
    dispatch(clearHistory());
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const listRef = useRef();
  function handleOutsideClick(e) {
    if (listRef.current && !listRef.current.contains(e.target))
      setIsListOpen(false);
  }
  return (
    <>
      <header className="bg-[#181F2B] py-6 ">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-4 items-center justify-between text-white">
          <Link href="/" className="order-1 w-40 block">
            <Image src={imgLogo} alt="Dujamarket logo" />
          </Link>

          {/* Search bar */}
          <div className=" w-full md:w-2/5 order-3 md:order-2 relative">
            <form className="z-10">
              <div className="flex">
                {/* <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className={` ${
                    isListOpen
                      ? " ltr:rounded-bl-none rtl:rounded-br-none rtl:rounded-tr-lg ltr:rounded-tl-lg"
                      : " rtl:rounded-r-lg ltr:rounded-l-lg "
                  } border-b ltr:border-r rtl:border-l z-50 inline-flex items-center flex-shrink-0 gap-1 p-3 md:p-4 text-sm font-medium text-center text-gray-900 border-gray-300 capitalize bg-gray-100  hover:bg-gray-200 focus:outline-none hover:text-red-500`}
                  type="button"
                >
                  {t("all-categories")}
                  <BiChevronDown />
                </button> */}

                <div className=" w-full">
                  {/* ############################################################################## */}
                  <input
                    onClick={() => setIsListOpen(!isListOpen)}
                    className={`rounded-t-lg ${
                      isListOpen ? "rounded-b-none" : "rounded-b-lg "
                    }  rtl:border-r-2 rtl:border-r-gray-50 ltr:border-l-2 ltr:border-l-gray-50 z-20 block w-full p-3 md:p-4 text-sm text-gray-900 border 
                     border-gray-300  bg-gray-50 placeholder:capitalize focus:outline-none`}
                    placeholder="search"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  {isFetching && (
                    <ImSpinner8
                      className="animate-spin absolute top-4 right-5 text-gray-600"
                      size={20}
                    />
                  )}

                  {isListOpen && (
                    <div
                      ref={listRef}
                      className=" z-50  absolute left-0 max-h-96 w-full overflow-auto rounded-br-md rounded-bl-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      {!debouncedValue || !data ? (
                        <>
                          <div className="text-xs capitalize text-neutral-500  p-6 flex justify-between">
                            <p className=" ">recently viewed products </p>
                            <button
                              type="button"
                              onClick={clearHistoryHandler}
                              className="underline"
                            >
                              clear
                            </button>
                          </div>
                          <ul>
                            {recentlyViewedProducts.length !== 0
                              ? recentlyViewedProducts?.map((product) => (
                                  <li
                                    key={product._id}
                                    className={` relative p-6 pt-0 cursor-default select-none`}
                                  >
                                    <div className=" flex gap-4">
                                      <div className="w-[60px] p-2 h-[60px] border rounded-md border-gray-300 flex justify-center aspect-square ">
                                        <img
                                          src={product.image}
                                          alt=""
                                          className="mix-blend-multiply w-[80%] aspect-square object-contain"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-1  text-sm ">
                                        <Link
                                          onClick={() => setIsListOpen(false)}
                                          href={`/products/${product._id}`}
                                          className="text-gray-700 hover:underline font-semibold capitalize block line-clamp-2"
                                        >
                                          {product.name}
                                        </Link>

                                        <h1 className="text-gray-500 capitalize">
                                          {formatPrice(product.price)}
                                          <span className="font-normal">
                                            {" "}
                                            EGP
                                          </span>
                                        </h1>
                                      </div>
                                    </div>
                                  </li>
                                ))
                              : null}
                          </ul>
                        </>
                      ) : data?.pages?.[0]?.products.length === 0 &&
                        query !== "" ? (
                        <p className=" relative cursor-default select-none p-6 text-gray-700">
                          nothing found
                        </p>
                      ) : (
                        data?.pages?.[0]?.products?.map((p) => (
                          <li
                            key={p._id}
                            className={`hover:bg-slate-100 relative p-6 cursor-default select-none`}
                          >
                            <Link
                              onClick={() => setIsListOpen(false)}
                              href={`/${p._id}`}
                            >
                              <div className=" flex gap-4">
                                <div className="w-[60px] h-[60px] flex justify-center aspect-square ">
                                  <img
                                    src={p.images[0]}
                                    alt=""
                                    className="mix-blend-multiply w-[80%] aspect-square object-contain"
                                  />
                                </div>
                                <div className="flex flex-col gap-2  text-sm ">
                                  <h1 className="text-blue-700 font-semibold capitalize block line-clamp-2">
                                    {p.name}
                                  </h1>

                                  <h1 className="text-red-500 font-semibold capitalize">
                                    {formatPrice(p.price)}
                                    <span className="font-normal"> EGP</span>
                                  </h1>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))
                      )}
                    </div>
                  )}

                  {/* ############################################################################## */}
                </div>
              </div>
            </form>
          </div>

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

            <div className="capitalize hidden ">
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
                <h2>
                  {formatPrice(cartQuery?.cart?.totalPrice || 0)}
                  <span className="ml-1 text-sm">EGP</span>
                </h2>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
