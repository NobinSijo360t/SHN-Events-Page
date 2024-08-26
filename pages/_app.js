import { Fragment } from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Saturday Hacknight</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
