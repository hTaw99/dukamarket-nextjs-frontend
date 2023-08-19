"use client";

import { useLogin } from "@/apis/auth";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: loginUser, error, isError, isLoading } = useLogin();
  const errorMsg = error?.response?.data?.msg;


  const onSubmit = (data) => {
    loginUser({ email: data.email, password: data.password });
  };

  return (
    <div className="container h-screen">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2  items-start xl:p-16 xl:px-40  rounded-md">
        {/* -------------------------------------------------- */}

        <div>
          <h1 className="w-2/3 capitalize leading-normal text-2xl md:text-4xl font-semibold mb-2 md:mb-6 rtl:text-3xl text-gray-800">
            {/* {t("dukamarket-account")} */}
            Login To Your DukaMarket Account
          </h1>
          <p className="mb-4 md:mb-10 w-5/6 text-gray-500">
            {/* {t("dukamarket-account-description")} */}
            login or create an account to access your latest shopping lists
            within our website and DukaMarket Shopping app.
          </p>
          <Link
            href="/signup"
            className="capitalize inline-block underline md:no-underline text-gray-800 md:border md:border-gray-400 md:px-10 md:py-3 font-medium rounded-md rtl:font-semibold"
          >
            {/* {t("create-account")} */}
            Create An Account
          </Link>
        </div>

        {/* -------------------------------------------------- */}

        <div className="bg-white w-full p-8 py-10 rounded-md">
          {/* <div className="flex min-h-full w-full">
            <div className="w-full max-w-md"> */}

          <form
            className="space-y-6 w-full"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="rounded-md flex flex-col gap-4 ">
              
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className="placeholder:capitalize relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder={"email"}
                  {...register("email", {
                    required: "Please provide your email ",
                  })}
                />
                <span className="text-xs text-red-500">
                  {errors.email?.message}
                </span>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Please provide your password ",
                  })}
                  className="placeholder:capitalize relative block w-full outline-none appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder={"password"}
                />
                <span className="text-xs text-red-500">
                  {errors.password?.message}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ltr:ml-2 rtl:mr-2 block text-sm capitalize text-gray-900"
                >
                  {"remember me"}
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium capitalize text-blue-600 hover:text-blue-500"
                >
                  {/* {t("forgot-password")} */}
                  forgot your password
                </Link>
              </div>
            </div>
            {isError && (
              <h1 className="text-center text-red-500 capitalize">
                {errorMsg}
              </h1>
            )}
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center w-full">
                  <FaCircle size={10} className=" animate-bounced" />
                </div>
              ) : (
                <button className="w-full capitalize text-white bg-red-500 px-10 py-3 font-medium rounded-md">
                  {/* {t("signin")} */}
                  sign in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Login;
