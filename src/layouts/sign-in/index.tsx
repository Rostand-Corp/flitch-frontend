import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';

import { AuthAPI } from '@api/index';
import AuthLayout from '@components/auth-layout';
import Button from '@components/button';
import Checkbox from '@components/checkbox';
import Input from '@components/input';
import routes from '@config/routes';
import backgroundImage from '@public/images/sign-in.jpg';
import TelegramLogo from '@public/images/telegram.svg';
import { getError } from '@utils/formik-helpers';

import { FormValues, initialValues, schema } from './utils';

const SignIn: React.FC = () => {
  const router = useRouter();

  const handleSubmit = useCallback(
    (data: FormValues) =>
      AuthAPI.authLoginPost({ loginRequest: data }).then((data) =>
        signIn('credentials', {
          ...data,
          redirect: false,
        }).then(() => router.push(routes.home)),
      ),
    [router],
  );

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: schema,
    validateOnBlur: false,
    onSubmit: handleSubmit,
  });

  return (
    <AuthLayout imageSrc={backgroundImage}>
      <form
        onSubmit={formik.handleSubmit}
        className="h-full flex flex-col justify-center"
      >
        <TelegramLogo className="max-h-[160px] mx-auto mb-2 xl:mb-[47px]" />
        <h1 className="mb-4 xl:mb-[74px] font-normal text-center sm:text-left">
          Sign In
        </h1>
        <div className="flex flex-col gap-3 xs:gap-4 md:gap-6">
          <div className="flex gap-5 flex-col">
            <Input
              id="email"
              placeholder="Email*"
              error={getError(formik, 'email')}
              {...formik.getFieldProps('email')}
            />
            <Input
              id="password"
              type="password"
              placeholder="Password*"
              error={getError(formik, 'password')}
              {...formik.getFieldProps('password')}
            />
          </div>
          <div className="mb-10 mt-14">
            Don't have an account?{' '}
            <Link href={routes.signUp} className="font-semibold">
              Register
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <Checkbox
                id="keepSignedIn"
                className="h-6 w-6"
                {...formik.getFieldProps('keepSignedIn')}
              />
              <p className="ml-5">Keep me Signed In</p>
            </div>
            <Button appearance="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
