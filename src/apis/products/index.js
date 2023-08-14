import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { axiosDefault } from "../AppClient";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import qs from "query-string";
import { useDispatch } from "react-redux";
import { setAsViewedProduct } from "@/store/features/recentlyViewedProductsSlice";
// import { setAsViewedProduct } from "@/store/features/recentlyViewedProductsSlice";

// ######################### Get All Products #########################
export const getProducts = async ({ pageParam = 1, queryKey }) => {
  let filters = {};

  if (queryKey[1]?.hasOwnProperty("filters")) {
    for (let key in queryKey[1].filters) {
      if (key === "sort") {
        filters[key] = queryKey[1].filters[key].split(",")[0];
      } else {
        filters[key] = queryKey[1].filters[key].map((f) => f.split(",")[0]);
      }
    }
  }
  filters = { ...filters, ...queryKey[1]?.queries };

  const queryStr = qs.stringify(filters, {
    arrayFormat: "bracket",
    skipEmptyString: true,
    skipNull: true,
  });

  const { data } = await axiosDefault({
    url: `/products?page=${pageParam}&${queryStr}`,
    method: "GET",
  });

  return data;
};

export const useGetProducts = (props) => {
  return useInfiniteQuery({
    queryKey: ["get-products", props],
    queryFn: getProducts,
    enabled: props.enabled ?? true,
    initialData: props.initialData,
    getNextPageParam: ({ currentPage, lastPage }) => {
      if (currentPage < lastPage) {
        return currentPage + 1;
      } else {
        return undefined;
      }
    },
  });
};
// ######################### Get Single Product #########################

async function getProduct(productId) {
  const { data } = await axiosDefault({
    url: `/products/${productId}`,
    method: "GET",
  });
  return data;
}

// export const useGetSingleProduct = (productId) => {
//   const dispatch = useDispatch();
//   return useQuery({
//     queryKey: ["get-single-product", productId],
//     queryFn: () => getProduct(productId),
//     onSuccess: (data) => {
//       dispatch(
//         setAsViewedProduct({
//           name: `${data.name.substring(0, 40)}...`,
//           image: data.images[0],
//           price: data.price,
//           _id: data._id,
//         })
//       );
//     },
//     onError: (error) => {
//       // if (error.response.status === 404) {
//       //   throw new Response("Not Found", error.response.status);
//       // }
//     },
//     select: (data) => data.product,
//   });
// };

export const useGetSingleProduct = (productId) => {
  // const axiosPrivate = useAxiosPrivate();
  return useQuery({
    queryKey: ["get-single-product", productId],
    queryFn: async () => {
      const { data } = await axiosDefault({
        url: `/products/${productId}`,
        method: "GET",
      });

      return data;
    },
    onSuccess: (data) => {},
    onError: (error) => {
      // if (error.response.status === 404) {
      //   throw new Response("Not Found", error.response.status);
      // }
    },
    select: (data) => data.product,
  });
};

// ######################### Get Similar Products #########################

export async function getSimilarProducts({ productId, ...rest }) {
  const queryStr = qs.stringify(rest, {
    skipNull: true,
  });

  const { data } = await axiosDefault({
    url: `/products/${productId}/similar?${queryStr}`,
    method: "GET",
  });
  return data;
}

export const useGetSimilarProducts = (props) => {
  return useQuery({
    queryKey: ["get-similar-products", props],
    queryFn: () => getSimilarProducts(props),
    select: (data) => data.products,
  });
};
