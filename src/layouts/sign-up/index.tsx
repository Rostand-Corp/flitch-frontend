import { useFormik } from 'formik';
import Link from 'next/link';

import AuthLayout from '@components/auth-layout';
import Button from '@components/button';
import Input from '@components/input';
import routes from '@config/routes';
import backgroundImage from '@public/images/sign-up.jpg';
import TelegramLogo from '@public/images/telegram.svg';
import { getError } from '@utils/formik-helpers';

import { type FormValues, initialValues, schema } from './utils';

const SignUp: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: schema,
    validateOnBlur: false,
    onSubmit: (data) => console.log(data),
  });

  return (
    <AuthLayout imageSrc={backgroundImage}>
      <form
        onSubmit={formik.handleSubmit}
        className="h-full flex flex-col justify-center"
      >
        <TelegramLogo className="mx-auto mb-6 sm:mb-10" />
        <h1 className="mb-9 xs:mb-[74px] font-normal text-center sm:text-left">
          Sign Up
        </h1>
        <div className="flex flex-col gap-3 xs:gap-4 md:gap-6">
          <div className="flex gap-5 flex-col sm:flex-row">
            <Input
              id="fullName"
              placeholder="Full Name*"
              error={getError(formik, 'fullName')}
              {...formik.getFieldProps('fullName')}
            />
            <Input
              id="username"
              placeholder="Username*"
              error={getError(formik, 'username')}
              {...formik.getFieldProps('username')}
            />
          </div>
          <Input
            id="email"
            placeholder="Email*"
            error={getError(formik, 'email')}
            {...formik.getFieldProps('email')}
          />
          <div className="flex gap-5 flex-col sm:flex-row">
            <Input
              id="password"
              type="password"
              placeholder="Password*"
              error={getError(formik, 'password')}
              {...formik.getFieldProps('password')}
            />
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password*"
              error={getError(formik, 'confirmPassword')}
              {...formik.getFieldProps('confirmPassword')}
            />
          </div>
          <div className="mb-10">
            Already have an account?{' '}
            <Link href={routes.signIn} className="font-semibold">
              Login
            </Link>
          </div>
          <div className="flex justify-end">
            <Button appearance="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
