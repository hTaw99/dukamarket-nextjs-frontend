"use client";

import { useEffect } from "react";
import { axiosPrivate } from "@/apis/AppClient";
import { useSelector } from "react-redux";
import { refreshTokenFn } from "@/apis/auth";

export default function useAxiosPrivate() {
  const { accessToken } = useSelector((state) => state.auth.user);

  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const resIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevReq = error?.config;
        if (
          error.response?.status === 403 &&
          !prevReq?.sent
          // ||
          // (error.response?.status === 404 && !prevReq?.sent)
        ) {
          prevReq.sent = true;
          const data = await refreshTokenFn();
          prevReq.headers.Authorization = `Bearer ${data.accessToken}`;

          return axiosPrivate(prevReq);
        }
        return Promise.reject(error);
      }
    );
    // Cleanup function
    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
      axiosPrivate.interceptors.response.eject(resIntercept);
    };
  }, [accessToken]);

  return axiosPrivate;
}
