import type { NextPage } from 'next';
import Head from 'next/head';

import SignUp from '@layouts/sign-up';

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up - Flitch</title>
      </Head>
      <SignUp />
    </>
  );
};

export default SignUpPage;
