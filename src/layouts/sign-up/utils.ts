import * as yup from 'yup';

export const initialValues = {
  fullName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export type FormValues = typeof initialValues;

export const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match'),
});
