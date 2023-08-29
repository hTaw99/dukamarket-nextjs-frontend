"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePictureModel } from "@/store/features/modelSlice";
import Image from "next/image";
import CustomImage from "@/app/utils/CustomImage";

export default function PictureModel() {
  const { isPictureModelOpen, isQuickViewModelOpen } = useSelector(
    (state) => state.model
  );

  const shownPicture = useSelector((state) => state.detail.shownPicture);
  const productToView = useSelector((state) => state.quickview.productToView);

  const dispatch = useDispatch();

  return (
    <Transition appear show={isPictureModelOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => dispatch(closePictureModel())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full w-screen items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="md:w-1/2 aspect-square transform overflow-y-scroll rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <CustomImage
                  width={400}
                  height={400}
                  src={
                    isQuickViewModelOpen ? productToView.image : shownPicture
                  }
                  className="w-full object-contain "
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
