"use client";

import Link from "next/link";
import BillingAddress from "@/app/components/BillingAddress";
import Delivery from "@/app/components/Delivery";
import Confirmation from "@/app/components/Confirmation";
import { useSelector } from "react-redux";
import { useGetCart } from "@/apis/cart";

const Checkout = () => {
  const { step } = useSelector((state) => state.checkout);
  const { isAuthenticated } = useSelector((state) => state.auth.user);
  const { data: cart } = useGetCart();

  const stepsComponents = {
    1: <BillingAddress />,
    2: <Delivery cart={cart} />,
    3: <Confirmation />,
  };

  return (
    <div className="container bg-white p-6 h-screen xl:w-3/5 2xl:w-2/5 mx-auto ">
      {/* <header className="mb-16 ">
        <nav className="text-white bg-gray-800 rounded-b-lg p-8 flex items-center justify-between">
          <Link href="/" className="w-36">
            <img src="/images/logo.svg" alt="Dujamarket logo" />
          </Link>
          <Link href="/" className="text-xs underline capitalize">
            continue shoping
          </Link>
        </nav>
      </header> */}

      {/* <p className="text-sm">
          There is no shoppingcart available. Add products to the shopping cart
          in the store.
        </p>
       */}

      {!isAuthenticated ? (
        <h1>Please sign in to continue</h1>
      ) : !cart?.cart ? (
        <h1>Your cart is Empty</h1>
      ) : (
        <div className="flex flex-col gap-6">{stepsComponents[step]}</div>
      )}
    </div>
  );
};

export default Checkout;
