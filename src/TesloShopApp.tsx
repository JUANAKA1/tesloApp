import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const TesloShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
