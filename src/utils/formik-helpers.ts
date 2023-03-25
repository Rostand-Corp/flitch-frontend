import type { FormikInstance } from '@typings/index';

export const getError = <T>(formik: FormikInstance<T>, name: keyof T) =>
  formik.touched[name] ? formik.errors[name] : '';
