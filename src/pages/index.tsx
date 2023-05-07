import type { NextPage } from 'next';
import Head from 'next/head';

import Home from '@layouts/home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In - Flitch</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
