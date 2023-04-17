import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { TOKEN_EXPIRATION } from '@config/constants';

import '@styles/globals.css';

type MyAppProps = AppProps<{ session: Session }>;

const MyApp = (props: MyAppProps) => {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <>
      <Head>
        <title>Flitch</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no , maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <SessionProvider
        session={session}
        refetchInterval={TOKEN_EXPIRATION - 10}
      >
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default MyApp;
