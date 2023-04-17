import _NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    accessTokenExpires: string;
  }

  interface User {
    accessToken: string;
    accessTokenExpires: string;
  }
}
