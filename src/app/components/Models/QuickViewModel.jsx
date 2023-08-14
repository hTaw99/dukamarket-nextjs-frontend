"use client"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeQuickViewModel,
  openPictureModel,
} from "@/store/features/modelSlice";
import RatingStars from "@/app/utils/RatingStars";
import AddToCartButton from "@/app/utils/AddToCartButton";
import { formatPrice } from "@/app/utils/formatPrice";

const QuickViewModel = () => {
  const { isQuickViewModelOpen, isPictureModelOpen } = useSelector((state) => state.model);
  const dispatch = useDispatch();
  const ref = useRef();

  
  const productToView = useSelector((state) => state.quickview.productToView);

  const [amount, setAmount] = useState(1);
  const [colorChoosed, setColorChoosed] = useState(
    productToView?.colors?.[0]?.name
  );

  useEffect(() => {
    setColorChoosed(productToView?.colors?.[0]?.name);
    setAmount(1);
  }, [productToView?.colors?.[0]?.name]);



  return (
    <Transition appear show={isQuickViewModelOpen} as={Fragment}>
      <Dialog
        initialFocus={ref}
        as="div"
        className="relative z-50"
        onClose={() => dispatch(closeQuickViewModel())}
      >
        <Transition.Child
          ref={ref}
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ---- Overlay ---- */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-5/6 h-[600px] overflow-y-auto lg:max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className=" flex flex-col h-full md:grid md:grid-cols-2 gap-8">
                  {/* --------- IMG ----------- */}
                  <div
                    className=" p-4 w-full min-h-[150px] flex justify-center items-cneter border border-gray-300 rounded-md overflow-hidden cursor-zoom-in "
                    onClick={() => dispatch(openPictureModel())}
                  >
                    <img
                      className="w-1/2 md:w-1/2 object-contain"
                      src={productToView.image}
                      alt=""
                    />
                  </div>

                  {/* --------- Details ----------- */}
                  <div className="flex flex-col">
                    {/* <Link to={`/${productToView.id}`}> */}
                    <h1 className="text-lg md:text-2xl font-semibold text-blue-700 mb-2">
                      {productToView.title}
                    </h1>
                    {/* </Link> */}
                    <div className="flex mb-4 items-center gap-4">
                      <div className="flex text-yellow-500 ">
                        <RatingStars
                          averageRating={productToView.averageRating}
                        />
                      </div>
                      <p className="text-gray-400 text-sm px-4 border-l">
                        {productToView.numReviews} Review
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
                      <h3 className="text-gray-800 font-semibold text-xl md:text-3xl flex justify-start gap-1">
                        <span className="text-base font-medium">EGP</span>
                        {formatPrice(
                          productToView.priceAfterDiscount ||
                            productToView.price
                        )}
                      </h3>
                      {productToView.priceAfterDiscount && (
                        <h3 className="text-gray-500 flex gap-1 line-through text-lg md:text-xl">
                          {formatPrice(productToView.price)}
                          <span>EGP</span>
                        </h3>
                      )}
                    </div>
                    <ul className="text-sm md:text-base mb-6 text-gray-500">
                      <li>{productToView.description}</li>
                    </ul>
                    {/* <div className="flex justify-between gap-4">
                      <AddToCartButton
                        amount={amount}
                        productId={productToView?.id}
                        color={
                          productToView?.colors?.find(
                            (color) => color.name === colorChoosed
                          )?._id
                        }
                      />

                      <div className="flex items-center gap-4">
                        <div
                          onClick={() =>
                            setAmount((perv) => {
                              if (perv > 1) {
                                return perv - 1;
                              } else {
                                return 1;
                              }
                            })
                          }
                          className=" hover:bg-gray-100 cursor-pointer h-full border border-gray-300 rounded-md flex justify-center items-center w-[48px]"
                        >
                          -
                        </div>
                        <h3>{amount}</h3>
                        <div
                          onClick={() => setAmount((perv) => perv + 1)}
                          className=" hover:bg-gray-100 cursor-pointer h-full border border-gray-300 rounded-md flex justify-center items-center w-[48px]"
                        >
                          +
                        </div>
                      </div>
                    </div> */}
                    {/* colors */}
                    <div className="mt-4">
                      <h1 className="mb-2 text-sm md:text-base ">Color:</h1>
                      <div className="flex ">
                        {productToView?.colors?.map((color) => (
                          <div
                            key={color._id}
                            style={{
                              border:
                                colorChoosed === color.name
                                  ? `solid 2px ${color.name}`
                                  : "none",
                            }}
                            className={`p-1 rounded-lg `}
                          >
                            <div
                              onClick={() => setColorChoosed(color.name)}
                              style={{
                                backgroundColor: color.name,
                              }}
                              className={`cursor-pointer w-6 h-6 border-red-500 rounded-md`}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* colors */}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QuickViewModel;

{
  /* <div className="flex gap-4"> */
}
{
  /* {images.map((image) => (
                        <div
                          key={image}
                          className={`border rounded-md cursor-pointer w-[70px] h-[70px] overflow-hidden ${
                            image === shownPicture
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          onClick={() => {
                            setShownPicture(image);
                          }}
                        >
                          <img
                            className="w-full h-full object-contain"
                            src={image}
                            alt=""
                          />
                        </div>
                      ))} */
}
// </div>
