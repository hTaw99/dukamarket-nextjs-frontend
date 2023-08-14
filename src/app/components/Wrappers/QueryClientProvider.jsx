"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const QueryClientProviderWrapper = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } },
      })
  );

  // const queryClient = new QueryClient({
  //   defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } },
  // });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientProviderWrapper;
