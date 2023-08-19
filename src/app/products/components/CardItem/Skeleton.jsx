"use client"

import { motion } from "framer-motion";
export default function ProductCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 100,
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      role="status"
      className="bg-white p-4 rounded-md "
    >
      <div className="animate-pulse h-full">
        <div className="flex flex-col gap-5 h-full">
          <div className="image   bg-gray-200 w-full rounded h-[200px]" />
          <div className="flex flex-col gap-2">
            <div className="title   bg-gray-200 w-full rounded h-[10px]" />
            <div className="title  bg-gray-200 w-1/3 rounded h-[10px]" />
          </div>
          <div className="price   bg-gray-200 w-1/2 rounded h-[30px]" />
          <div className="button  bg-gray-200 w-full rounded h-[40px] mb-auto " />
        </div>
      </div>
    </motion.div>
  );
}
