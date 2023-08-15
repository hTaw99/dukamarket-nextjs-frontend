"use client";

import { useForgotPassword } from "@/apis/auth";
import { useSelector } from "react-redux";
import { FaCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import EmailForgotPassword from "../utils/EmailForgotPassword";
import { render } from "@react-email/components";

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { mutate: forgotPassword, isLoading, error } = useForgotPassword();
  const { isAuthenticated } = useSelector((state) => state.auth.user);

  const onSubmit = (data) => {
    console.log(data);
    const emailHtml = render(<EmailForgotPassword />);
    forgotPassword({ email: data.email, emailToSend: emailHtml });
  };

  return (
    <div className="container h-screen ">
      <div className=" xl:p-16 flex justify-center items-center   rounded-md">
      {/* <EmailForgotPassword /> */}
        {/* -------------------------------------------------- */}

        <div className="bg-white p-8 py-10 rounded-md">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Password assistance</h1>
            <p className="text-sm">
              Enter the email address associated with your Dukamarket account.
            </p>
          </div>

          <form
            className="space-y-6 w-full"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md flex flex-col gap-4 ">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className="mb-2 relative block w-full appearance-none rounded-md  border 
                   outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Please provide your email",
                  })}
                />
                <span className="text-center text-red-500">
                  {error?.response?.data?.message}
                </span>
                <span className="text-xs text-red-500">
                  {errors.email?.message}
                </span>
              </div>
            </div>
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center w-full">
                  <FaCircle size={10} className=" animate-bounced" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full text-white bg-red-500 px-10 py-3 font-medium rounded-md"
                >
                  Continue
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
