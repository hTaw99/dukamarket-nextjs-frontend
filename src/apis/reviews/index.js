import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosDefault } from "../AppClient";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useDispatch } from "react-redux";
import { disableEditing } from "@/store/features/reviewSlice";
import { useRouter } from "next/navigation";

export const getAllReviews = async (productId) => {
  const { data } = await axiosDefault({
    url: `reviews?product=${productId}`,
    method: "GET",
  });

  return data;
};

export const useGetAllReviews = (productId) => {
  return useQuery({
    queryFn: () => getAllReviews(productId),
    queryKey: ["reviews", productId],
  });
};

export const useAddReview = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  return useMutation({
    mutationFn: async (reviewData) => {
      const { data } = await axiosPrivate({
        url: "reviews",
        method: "POST",
        data: reviewData,
      });
      return data;
    },
    onError: (err) => {},
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({
        queryKey: ["get-single-product", data.review.product],
      });
      // addReviewRevalidation();
      // fetch(
      //   `http://localhost:3000/api?tag=newArrival&path=/products/[productId]`
      // );
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  return useMutation({
    mutationFn: async (reviewId) => {
      const { data } = await axiosPrivate({
        url: `reviews/${reviewId}`,
        method: "DELETE",
        data: reviewId,
      });
      return data;
    },
    onError: (err) => {},
    onSuccess: (data) => {
      console.log({ data });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({
        queryKey: ["get-single-product"],
      });
      // addReviewRevalidation();
      // fetch(
      //   `http://localhost:3000/api?tag=newArrival&path=/products/[productId]`
      // );
      // router.refresh();
    },
  });
};

export const useUpdateReview = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (reviewData) => {
      await axiosPrivate({
        url: `reviews/${reviewData.product}`,
        method: "PATCH",
        data: reviewData,
      });
    },
    onError: (err) => {},
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({
        queryKey: ["get-single-product"],
      });
      dispatch(disableEditing());
      // fetch(
      //   `http://localhost:3000/api?tag=newArrival&path=/products/[productId]`
      // );
    },
  });
};
