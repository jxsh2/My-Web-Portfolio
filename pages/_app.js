// pages/_app.js
import Head from "next/head";

import "semantic-ui-css/semantic.min.css";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
