import "./global.css";

import Script from "next/script";
import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Contact from "@components/Contact";
import { Whatsapp } from "@components/Whatsapp";
import { CommonProvider } from "@context/CommonProvider";
import { LocaleProvider } from "@context/LocaleProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <CommonProvider>
          <ChakraProvider>
            <Component {...pageProps} />
            <Whatsapp />
          </ChakraProvider>
        </CommonProvider>
      </LocaleProvider>

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
      <Script src="https://wiki4fit.s3.sa-east-1.amazonaws.com/timber.master.min.js" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
