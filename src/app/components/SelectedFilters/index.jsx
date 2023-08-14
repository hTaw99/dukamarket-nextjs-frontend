"use client"

import React, { useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { removeAllFilters, removeFilter } from "@/store/features/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default React.memo(function SelectedFilters() {
  const { filters } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const selectedFilters = useMemo(() => {
    // console.log('useMemo selectedFilters');
    let arr = [];
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => arr.push([key, v.split(",")[1]]));
        } else arr.push([key, value.split(",")[1]]);
      }
    });
    return arr;
  }, [filters]);
  return (
    <div className="flex flex-wrap gap-2">
      {selectedFilters?.map((filter) => (
        <div
          key={filter[1]}
          className="flex gap-2 cursor-default items-center px-6 py-2 border border-gray-300 rounded-full"
        >
          <AiOutlineClose
            size={16}
            onClick={() =>
              dispatch(removeFilter({ name: filter[0], value: filter[1] }))
            }
            className="cursor-pointer"
          />
          <span className="capitalize">{filter[0]}</span> -{" "}
          <span className="capitalize">{filter[1]}</span>
        </div>
      ))}
      {selectedFilters.length > 1 && (
        <button
          onClick={() => dispatch(removeAllFilters())}
          className="px-6 py-2 capitalize bg-red-50 rounded-full text-red-500"
        >
          clear all
        </button>
      )}
    </div>
  );
});
