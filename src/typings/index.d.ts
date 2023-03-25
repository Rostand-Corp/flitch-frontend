import type {
  FormikComputedProps,
  FormikHandlers,
  FormikHelpers,
  FormikState,
} from 'formik';

type FormikInstance<T> = FormikComputedProps<T> &
  FormikState<T> &
  FormikHelpers<T> &
  FormikHandlers;

type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
