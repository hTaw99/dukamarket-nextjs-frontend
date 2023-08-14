"use client";

import { setFilters } from "@/store/features/filterSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const ListClient = ({ _id, name }) => {
  const dispatch = useDispatch();

  return (
    <li className="hover:text-red-500 hover:translate-x-2 transition-all">
      <Link
        href={"/products"}
        onClick={() =>
          dispatch(
            setFilters({
              name: "category",
              value: [`${_id},${name}`],
            })
          )
        }
        className="capitalize"
      >
        {name}
      </Link>
    </li>
  );
};

export default ListClient;
