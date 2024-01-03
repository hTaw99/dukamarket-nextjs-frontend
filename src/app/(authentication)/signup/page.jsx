"use client";

import { useRegister } from "@/apis/auth";
import { useForm } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import Email from "@/app/utils/Email";
import { render } from "@react-email/render";

const Signup = () => {
  const { mutate: addUser, isPending, isError, error } = useRegister();
  const errorMsg = error?.response?.data?.msg;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const emailHtml = render(<Email name={data.firstName} />);
  // console.log(emailHtml);
  const onSubmit = (data) => {
    // const emailHtml = render(<Email name={data.firstName} />);
    addUser({
      name: data.firstName + " " + data.lastName,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      // emailToSend: emailHtml,
    });
  };

  return (
    <div className="container h-screen">
      <div className="flex h-full justify-center items-start">
        <div className="bg-white p-8 py-10  rounded-md">
          {/* <div className="flex min-h-full w-full">
            <div className="w-full max-w-md"> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 w-full"
            action="#"
            method="POST"
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <h1 className="text-2xl text-center font-semibold text-gray-800">
              Create an Dukamrket account
            </h1>
            <div className="rounded-md flex flex-col gap-4 ">
              <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                  <label htmlFor="first-name" className="sr-only">
                    First name
                  </label>
                  <input
                    type="name"
                    {...register("firstName", {
                      required: "This field is required",
                    })}
                    className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                    placeholder="First name"
                  />
                  <span className="text-xs text-red-500">
                    {errors.firstName?.message}
                  </span>
                </div>
                <div className="w-full">
                  <label htmlFor="last-name" className="sr-only">
                    Last name
                  </label>
                  <input
                    type="name"
                    {...register("lastName", {
                      required: "This field is required",
                    })}
                    className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                    placeholder="Last name"
                  />
                  <span className="text-xs text-red-500">
                    {errors.lastName?.message}
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email", {
                    required: "Please provide an email",
                  })}
                  type="email"
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Email address"
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
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Please provide an password",
                  })}
                  className="relative block w-full outline-none appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Password"
                />
                <span className="text-xs text-red-500">
                  {errors.password?.message}
                </span>
              </div>
              <div>
                <label htmlFor="confrim-password" className="sr-only">
                  Confirm password
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  {...register("passwordConfirm", {
                    required: "Please provide an password",
                    validate: (value, formValue) =>
                      value === formValue.password ||
                      "Password fields not match each other",
                  })}
                  className="relative block w-full outline-none appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Confirm password"
                />
                <span className="text-xs text-red-500">
                  {errors.passwordConfirm?.message}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-600">
                  Already have an account?
                  <Link href="/login" className="text-blue-500">
                    Login
                  </Link>
                </a>
              </div>
            </div>

            {isError && (
              <h1 className="text-center text-red-500 capitalize">
                {errorMsg}
              </h1>
            )}

            <div>
              {isPending ? (
                <div className="flex justify-center items-center w-full">
                  <FaCircle size={10} className=" animate-bounced" />
                </div>
              ) : (
                <button className="w-full text-white bg-red-500 px-10 py-3 font-medium rounded-md">
                  Create account
                </button>
              )}
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
