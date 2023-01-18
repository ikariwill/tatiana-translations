import Footer from "../components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@300;400&family=IBM+Plex+Mono:wght@200;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="shop home-page">
        <Main />
        <NextScript />

        <Footer />
      </body>
    </Html>
  );
}
