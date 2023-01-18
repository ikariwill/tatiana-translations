import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useState } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
      <Script src="https://wiki4fit.s3.sa-east-1.amazonaws.com/timber.master.min.js" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
