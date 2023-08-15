"use client"

import { useOtpVerification } from "@/apis/auth";
import OtpInput from "@/app/utils/OtpInput";
import  { useState } from "react";
import { FaCircle } from "react-icons/fa";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");

  const onChange = (value) => {
    setOtp(value);
  };

  const { mutate: verifyOtp, isLoading, error } = useOtpVerification();

  const submitHandler = (e) => {
    e.preventDefault();
    verifyOtp({ otp });
  };

  return (
    <div className="container h-screen ">
      <div className=" lg:p-16 flex justify-center items-center   rounded-md">
        {/* -------------------------------------------------- */}

        <div className="bg-white p-8 py-10 rounded-md md:w-4/6 lg:w-1/3">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">OTP Verification</h1>
            <p className="text-sm">
              Enter the email address associated with your Dukamarket account.
            </p>
          </div>

          <form
            className="space-y-6 w-full"
            action="#"
            method="POST"
            onSubmit={submitHandler}
          >
            <OtpInput value={otp} onChange={onChange} valueLength={4} />
            {error && <div className="text-red-500 text-center">{error.response.data.message}</div>}

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
                  Enter
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
