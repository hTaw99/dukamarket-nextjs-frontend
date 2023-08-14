"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeCartSideModel } from "@/store/features/modelSlice";
import { useGetCart, useRemoveItemFromCart } from "@/apis/cart";
import { BiTrash } from "react-icons/bi";
import { formatPrice } from "@/app/utils/formatPrice";
import Image from "next/image";
import imgCart from "@/assets/noCartFound.svg";

export default function CartSide() {
  const isCartSideModelOpen = useSelector(
    (state) => state.model.isCartSideModelOpen
  );
  const dispatch = useDispatch();

  // ###################s##################################
  const { data: cartQuery } = useGetCart();
  // #####################################################

  const { mutate: removeItem } = useRemoveItemFromCart();

  return (
    <Transition.Root
      appear
      show={isCartSideModelOpen}
      as={Fragment}
      className=" w-screen"
    >
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => dispatch(closeCartSideModel())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none  fixed inset-y-0 right-0 flex ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className=" pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1  overflow-y-auto py-6">
                      <div className="w-full pb-4 border-b">
                        <div className=" sm:px-6 flex items-start justify-between ">
                          <Dialog.Title className="text-xl font-semibold text-gray-900 ">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => dispatch(closeCartSideModel())}
                            >
                              <span className="sr-only">Close panel</span>
                              {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 px-6">
                        {!cartQuery?.cart?.totalItems ||
                        cartQuery?.cart?.totalItems === 0 ? (
                          <div className="flex flex-col gap-4 justify-center items-center">
                            <Image
                              src={imgCart}
                              width={500}
                              height={500}
                              className="w-1/5 "
                              alt="No products found in cart"
                            />
                            <h1 className="text-gray-800 text-center">
                              No products found in cart
                            </h1>
                          </div>
                        ) : (
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartQuery?.cart?.items?.map((item) => (
                                <li key={item._id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.product.images[0]}
                                      // alt={item.imageAlt}
                                      className="h-full w-full p-2 object-contain object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <Link
                                            href={`/products/${item.product._id}`}
                                            className="line-clamp-2"
                                          >
                                            {item.product.name}
                                          </Link>
                                        </h3>
                                        <p className="ml-4">
                                          {formatPrice(
                                            item.product.priceAfterDiscount ||
                                              item.product.price
                                          )}
                                          <span className="ml-1 font-medium text-sm">
                                            EGP
                                          </span>
                                        </p>
                                      </div>
                                      <p
                                        className={`capitalize mt-1 text-sm text-gray-500 `}
                                      >
                                        {item?.selectedColor?.name}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {item.amount}
                                      </p>

                                      <div className="text-gray-600 cursor-pointer">
                                        <BiTrash
                                          size={24}
                                          onClick={() => {
                                            removeItem(item._id);
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between gap-2  text-base font-medium text-gray-900">
                        <div>
                          <p>Subtotal</p>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                        </div>
                        <p className="px-4 py-2 border rounded-md self-start">
                          {formatPrice(cartQuery?.cart?.totalPrice || 0)}
                          <span className="ml-1 font-medium text-sm">EGP</span>
                        </p>
                      </div>

                      <div className="mt-6 justify-between flex gap-4">
                        <Link
                          href="/checkout"
                          onClick={() => dispatch(closeCartSideModel())}
                          className=" w-full text-center rounded-md border border-transparent bg-red-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-red-600"
                        >
                          Checkout
                        </Link>
                        <Link
                          href="/cart"
                          onClick={() => dispatch(closeCartSideModel())}
                          className="w-full hover:underline underline-offset-2 decoration-solid text-center rounded-md border border-gray-500 px-6 py-3 font-medium text-neutral-700"
                        >
                          View Cart
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-neutral-800 hover:text-neutral-700"
                            onClick={() => dispatch(closeCartSideModel())}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
