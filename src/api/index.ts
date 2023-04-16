import { Configuration, AuthApi } from '@api/lib';

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL || '',
  fetchApi: fetch,
  headers: {
    accept: 'application/json',
  },
});

export const AuthAPI = new AuthApi(config);
