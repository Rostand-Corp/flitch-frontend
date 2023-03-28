import * as yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
  keepSignedIn: false,
};

export type FormValues = typeof initialValues;

export const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  keepSignedIn: yup.boolean(),
});
