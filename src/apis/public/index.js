import { useQuery } from "@tanstack/react-query";
import { axiosDefault } from "../AppClient";

// ######################### Get All Categories #########################
export async function getCategories() {
  const { data } = await axiosDefault({
    url: "/categories",
    method: "GET",
  });
  return data;
}

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });
};

// ######################### Get All Brands #########################
async function getBrands() {
  const { data } = await axiosDefault({
    url: "/brands",
    method: "GET",
  });
  return data;
}

export const useGetBrands = () => {
  return useQuery({
    queryKey: ["get-brands"],
    queryFn: getBrands,
  });
};
