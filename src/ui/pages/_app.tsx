import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import store from "~/adapters/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
