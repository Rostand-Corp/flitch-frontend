import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Button from '@components/button';
import routes from '@config/routes';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-[200px] flex flex-col gap-1">
      <Button appearance="primary" onClick={() => router.push(routes.signIn)}>
        Sign In
      </Button>
      <Button appearance="primary" onClick={() => router.push(routes.signUp)}>
        Sign Up
      </Button>
    </div>
  );
};

export default Home;
