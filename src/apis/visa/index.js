import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const usePay = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (addressId) => {
      const { data } = await axiosPrivate({
        url: `visa`,
        method: "POST",
        data: { addressId },
      });
      return data;
    },
    onError: (err) => {},
    onSuccess: (data) => {
      console.log(data)
      window.location.href = data.paymentLink;
    },
  });
};
