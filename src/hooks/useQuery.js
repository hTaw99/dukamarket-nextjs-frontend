import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useSearchQuery = () => {
  const searchParams = useSearchParams();
  // const { search } = useLocation();

  return useMemo(() => new URLSearchParams(searchParams), [searchParams]);
};
export default useSearchQuery;
