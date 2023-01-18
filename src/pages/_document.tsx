import Footer from "../components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="shop home-page">
        <Main />
        <NextScript />

        <Footer />
      </body>
    </Html>
  );
}
