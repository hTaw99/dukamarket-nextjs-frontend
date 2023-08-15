"use client";

import { useEffect, useState } from "react";
import { useRefreshToken } from "@/apis/auth";
import { logout, setUserOnRefresh } from "@/store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaCircle } from "react-icons/fa";

export default function PersistLogin({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth.user);
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  const { fetchStatus } = useRefreshToken({
    enabled: !isAuthenticated && status === "unknown",
    onSuccess: (data) => {
      dispatch(setUserOnRefresh(data));
    },
    onError: () => {
      dispatch(logout());
    },
  });

  useEffect(() => {
    if (fetchStatus === "idle") {
      setLoading(false);
    }
  }, [fetchStatus]);

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <FaCircle size={10} className="text-gray-700 animate-bounced" />
      </div>
    );
  return [children];
}
