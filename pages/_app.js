/** LIBRARIES */
import { useEffect } from "react";
import Head from "next/head";
import HeaderSection from "../components/Header";
import FooterSection from "../components/FooterSection";

/** STYLES */
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.scss";

const MyApp = (props) => {
  let { Component, pageProps } = props;

  let componentProps = {
    ...pageProps,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderSection />
      <Component {...componentProps} />
      <FooterSection />
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let props = {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
  };

  return props;
};

export default MyApp;
