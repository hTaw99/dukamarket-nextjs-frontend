import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { setMyAddress, setStep } from "@/store/features/checkoutSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

// export const useCreateAddress = () => {
//   const axiosPrivate = useAxiosPrivate();

//   return useMutation({
//     mutationFn: async (address) => {
//        await axiosPrivate({
//         url: `address`,
//         method: "POST",
//         data: address,
//       });
//     },
//   });
// };

export const useCreateAddress = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (address) => {
      const { data: addressData } = await axiosPrivate({
        url: `address`,
        method: "POST",
        data: address,
      });
      return addressData;
    },
    onSuccess: (addressData) => {
      dispatch(setStep(2));
      dispatch(setMyAddress(addressData.address));
      console.log(addressData.address);
      queryClient.invalidateQueries({ queryKey: ["address"] });
    },
  });
};

export const useGetAddress = () => {
  const axiosPrivate = useAxiosPrivate();
  const { name } = useSelector((state) => state.auth.user);

  return useQuery({
    queryKey: ["address", name],
    queryFn: async () => {
      const { data } = await axiosPrivate({
        url: `address`,
        method: "GET",
      });
      return data;
    },
  });
};

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const { myAddress } = useSelector((state) => state.checkout);
  const { name } = useSelector((state) => state.auth.user);
  return useMutation({
    mutationFn: async (addressId) => {
      const { data } = await axiosPrivate({
        url: `address`,
        method: "DELETE",
        data: { addressId },
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["address", name] });
      // dispatch(setMyAddress(null));
    },
  });
};
