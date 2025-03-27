/** LIBRARIES */
import Head from "next/head";

export default function HeadComponent({ title, description }) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />

      <meta name="description" content={description} />
    </Head>
  );
}
