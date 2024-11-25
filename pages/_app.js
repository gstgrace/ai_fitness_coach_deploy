import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
