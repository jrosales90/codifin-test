import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/Navbar";
import GenericLayout from "@/layouts/GenericLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GenericLayout>
        <Component {...pageProps} />
      </GenericLayout>
    </Provider>
  );
}
