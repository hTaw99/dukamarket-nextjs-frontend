"use client";

import { removeProductFromCompare } from "@/store/features/compareSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import AddToCartButton from "@/app/utils/AddToCartButton";
import { formatPrice } from "@/app/utils/formatPrice";
import RatingStars from "@/app/utils/RatingStars";
import { closeCompareModel } from "@/store/features/modelSlice";
import Image from "next/image";
import CustomImage from "@/app/utils/CustomImage";

const Table = () => {
  const fieldToCompare = [
    { id: 1, name: "image" },
    { id: 3, name: "price" },
    { id: 4, name: "description" },
    // { id: 5, name: "sku" },
    // { id: 6, name: "availability" },
    // { id: 7, name: "brand" },
    { id: 8, name: "colors" },
    { id: 9, name: "numbers of reviews" },
    { id: 10, name: "average rating" },
  ];

  const { productsToCompare } = useSelector((state) => state.compare);
  const dispatch = useDispatch();
  return (
    <div
      className={` ${
        productsToCompare.length === 0 && " aspect-square"
      } rounded-md `}
    >
      <h1 className="capitalize text-2xl font-medium pb-3 mb-3 border-b border-slate-300">
        compare table
      </h1>
      {productsToCompare.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p className="text-gray-600">No products to compare</p>
        </div>
      ) : (
        <table className=" border-collapse ">
          <tbody>
            {fieldToCompare?.map((field, i) => (
              <tr key={field?.id}>
                <th
                  className={`px-8 py-2 ${
                    field.name == "image" ? "" : " bg-neutral-200 "
                  } capitalize border-b border-slate-300  text-gray-600 font-medium`}
                >
                  {field.name === "image" ? "" : field?.name}
                </th>

                {productsToCompare?.map((product, i) =>
                  field.name === "image" ? (
                    <td
                      key={product?.sku}
                      className=" border-b border-slate-300  p-4   "
                    >
                      <div className="p-4 rounded-md ">
                        <div className="flex gap-4 items-start">
                          <div className="w-[125px] h-[125px] flex justify-center aspect-square bg-slate-100 p-4 rounded-md ">
                            <CustomImage
                              width={100}
                              height={100}
                              src={product?.[field?.name]}
                              className="w-full mix-blend-multiply  object-contain "
                              alt="product img"
                            />
                          </div>
                          <div className="flex flex-col justify-between gap-8">
                            <div className="flex  justify-between items-start">
                              <Link
                                href={`/products/${product?.sku}`}
                                onClick={() => dispatch(closeCompareModel())}
                                className="hover:text-red-500 text-gray-700 font-semibold capitalize text-base block line-clamp-2"
                              >
                                {product?.title}
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeProductFromCompare({
                                      sku: product.sku,
                                    })
                                  )
                                }
                              >
                                <AiOutlineClose size={20} />
                              </button>
                            </div>
                            <AddToCartButton productId={product.sku} />
                          </div>
                        </div>
                      </div>
                    </td>
                  ) : field.name === "average rating" ? (
                    <td
                      key={product?.sku}
                      className=" text-yellow-500 border-b border-slate-300  p-4"
                    >
                      <div className="flex">
                        <RatingStars averageRating={product?.[field?.name]} />
                      </div>
                    </td>
                  ) : (
                    <td
                      key={product?.sku}
                      className={` w-[400px]  bg-white p-6  border-b  border-slate-300`}
                    >
                      {field.name === "price"
                        ? `${formatPrice(product?.[field?.name])} EGP`
                        : product?.[field?.name]}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
