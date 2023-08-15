import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import Image from "next/image";
import ListClient from "./ListClient";

const CategoryList = async ({ images }) => {

  // #################################
  const res = await fetch(`${process.env.LOCAL}/api/categories`);
  const categories = await res.json();
  // #################################

  return (
    <div className="bg-white flex flex-col border-r">
      <div className="overflow-hidden h-48 flex justify-center  items-center ">
        <Image
          className="object-cover h-full w-full"
          width={500}
          height={500}
          src={images?.[0]}
          alt=""
        />
      </div>
      <div className="p-8">
        <ul className="flex flex-col gap-y-2 pb-6 mb-6 border-b border-gray-200">
          {categories?.map((cat, i) => (
            <ListClient key={cat._id} {...cat} />
          ))}
        </ul>
        <div className="flex items-center gap-1 text-red-500">
          <Link href={"/products"}>See All Products</Link>
          <FiChevronsRight />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
