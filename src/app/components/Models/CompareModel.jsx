"use client";
import { Dialog, Transition } from "@headlessui/react";
import { closeCompareModel } from "@/store/features/modelSlice";
import { Fragment, lazy, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "@/app/components/Table";

// const Table = lazy(() => import("../Table"));

const CompareModel = () => {
  const { isCompareModelOpen } = useSelector((state) => state.model);
  const dispatch = useDispatch();
  const ref = useRef();
  return (
    <Transition
      className="z-50 w-[2000px]"
      appear
      show={isCompareModelOpen}
      as={Fragment}
    >
      <Dialog
        initialFocus={ref}
        as="div"
        className="relative z-10"
        onClose={() => dispatch(closeCompareModel())}
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
              <Dialog.Panel className="min-w-[25%] min-h-[50vh] transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all">
                <Table />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CompareModel;
