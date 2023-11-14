import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { store } from "@/redux/store";
import { GlobalStyle } from "@/styles/styled";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>MKS Sistemas Challenge</title>
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <GlobalStyle />
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
