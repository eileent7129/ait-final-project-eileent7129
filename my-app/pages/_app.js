import React from "react"
import RootLayout from "../components/RootLayout";
import "../styles/main.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
	<RootLayout>
        <Component {...pageProps} />
      </RootLayout>     
    </>
  );
}
