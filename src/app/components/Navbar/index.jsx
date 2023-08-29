"use client";

import { setFilters } from "@/store/features/filterSlice";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useGetCategories } from "@/apis/public";
import CustomImage from "@/app/utils/CustomImage";

export default function Navbar() {
  const dispatch = useDispatch();
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const { data: categories } = useGetCategories();

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const listRef = useRef();
  function handleOutsideClick(e) {
    if (listRef.current && !listRef.current.contains(e.target))
      setIsCategoryListOpen(false);
  }

  return (
    <nav className=" sticky  top-0 z-40  bg-primary-1">
      <div className="relative container mx-auto py-3 text-white">
        <ul className="flex gap-10">
          <li
            onClick={() => setIsCategoryListOpen((prev) => !prev)}
            className={`flex items-center gap-2  border-gray-500 cursor-pointer hover:text-red-500`}
          >
            <RxHamburgerMenu size={24} />
            <button className="text-sm font-semibold uppercase">
              all categories
            </button>
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <Link  href="/" className="text-sm font-semibold uppercase">
              home
            </Link>
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <Link href="/products" className="text-sm font-semibold uppercase">
              shop
            </Link>
          </li>
        </ul>
        <div className="absolute overflow-hidden w-full left-0  top-12">
          <AnimatePresence>
            {isCategoryListOpen && (
              <motion.div
                initial={{ y: -280 }}
                animate={{ y: 0 }}
                exit={{ y: -280 }}
                transition={{
                  type: "keyframes",
                  ease: "easeOut",
                  duration: 0.5,
                }}
                ref={listRef}
                className="-z-[1000] bg-white text-black p-8 pt-6 flex flex-col gap-2  shadow-lg rounded-md"
              >
                <h1 className="text-gray-400 capitalize pb-4 border-b mb-2">
                  categories
                </h1>
                {categories?.map((cat, i) => (
                  <Link
                    href="products"
                    onClick={() => {
                      setIsCategoryListOpen(false);
                      dispatch(
                        setFilters({
                          name: "category",
                          value: [`${cat._id},${cat.name}`],
                        })
                      );
                    }}
                    className="flex gap-4 rounded-md hover:bg-gray-100 p-4 cursor-pointer"
                    key={cat._id}
                  >
                    <div className="w-12 h-12 rounded-sm overflow-hidden">
                      <CustomImage
                        src={cat.images[0]}
                        className="h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h1 className="font-semibold capitalize">{cat.name}</h1>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
