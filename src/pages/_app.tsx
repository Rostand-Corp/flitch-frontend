import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Flitch</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no , maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
