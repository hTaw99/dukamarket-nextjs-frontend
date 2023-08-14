"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useSelector((state) => state.auth.user);

  return isAuthenticated ? (
    [children]
  ) : (
    router.push(`/login?from=${pathname}`)
  );
};

export default RequireAuth;
