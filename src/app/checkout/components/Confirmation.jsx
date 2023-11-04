import { usePay } from "@/apis/visa";
import { setStep } from "@/store/features/checkoutSlice";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Confirmation = () => {
  const { myAddress } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const { mutate: pay, isPending } = usePay();

  return (
    <>
      <div className="text-gray-700 p-2 rounded-md bg-gray-100">
        <h1 className="font-semibold">Billing and Shipping Address</h1>
      </div>
      <div className="text-gray-700 p-2 rounded-md bg-gray-100">
        <h1 className="font-semibold">Delivery and cash</h1>
      </div>
      <section className="border border-gray-300 rounded-lg ">
        <div className="text-white p-2 rounded-t-lg bg-gray-800">
          <h1 className="font-semibold">Review and confirm</h1>
        </div>
        <div className=" p-10">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* <div className="flex flex-col gap-2">
                <h1 className="font-bold">Billing Address</h1>
                <div className="rounded-md border border-gray-300 p-4">
                  <p className="capitalize">
                    <span className="font-semibold">name:</span>
                    {myShippingAddress.fullname}
                  </p>
                  <p>
                    <span className="font-semibold">Mobile:</span>
                    {myShippingAddress.mobileNumber}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>
                    {myShippingAddress.address}
                  </p>
                  {myShippingAddress.buildingName && (
                    <p>
                      <span className="font-semibold">Building name:</span>
                      {myShippingAddress.buildingName}
                    </p>
                  )}
                  {myShippingAddress.apartmentNumber && (
                    <p>
                      <span className="font-semibold">Apartment No.:</span>
                      {myShippingAddress.apartmentNumber}
                    </p>
                  )}

                  {myShippingAddress.floorsNumber && (
                    <p>
                      <span className="font-semibold">Floors No.:</span>
                      {myShippingAddress.floorsNumber}
                    </p>
                  )}
                </div>
              </div> */}

            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Shipping Address</h1>
              <div className="rounded-md border border-gray-300 p-4">
                <p className="capitalize">
                  <span className="font-semibold">name:</span>
                  {myAddress?.fullname}
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>
                  {myAddress?.phone}
                </p>
                <p>
                  <span className="font-semibold">Address:</span>
                  {myAddress?.street}
                </p>
                {myAddress?.building && (
                  <p>
                    <span className="font-semibold">Building name:</span>
                    {myAddress?.building}
                  </p>
                )}
                {!!myAddress?.apartment && (
                  <p>
                    <span className="font-semibold">Apartment No.:</span>
                    {myAddress?.apartment}
                  </p>
                )}
                {!!myAddress?.floor && (
                  <p>
                    <span className="font-semibold">Floors No.:</span>
                    {myAddress?.floor}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Delivery date and time</h1>
              <div className="rounded-md border h-full border-gray-300 p-4">
                <p className="capitalize">
                  <span className="font-semibold">Delivery Date:</span>
                  Monday, 19/06/2023
                </p>
                <p>
                  <span className="font-semibold">Delivery Time:</span> 10:00 AM
                  - 06:00 PM
                </p>
              </div>
            </div>
          </div>

          <h1 className="mb-8 text-xs text-gray-800">
            By clicking the "Continue with the Payment" you indicate that you
            agree to <span className="text-red-500">Terms and Conditions</span>
          </h1>

          <div className="justify-between flex items-center">
            <button
              onClick={() => dispatch(setStep(2))}
              className="text-xs md:text-sm font-bold rounded-md bg-gray-200 text-gray-800 py-2 px-4 uppercase "
            >
              back
            </button>
            <button
              onClick={() => {
                pay(myAddress._id);
              }}
              className="text-xs md:text-sm font-bold rounded-md bg-red-500 text-white py-2 px-4 uppercase "
            >
              {isPending ? (
                <div className="flex justify-center items-center w-full">
                  <FaCircle size={10} className=" animate-bounced" />
                </div>
              ) : (
                "continue with payment"
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confirmation;
