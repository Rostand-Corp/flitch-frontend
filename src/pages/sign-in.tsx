import type { NextPage } from 'next';
import Head from 'next/head';

import SignIn from '@layouts/sign-in';

const SignInPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In - Flitch</title>
      </Head>
      <SignIn />
    </>
  );
};

export default SignInPage;
