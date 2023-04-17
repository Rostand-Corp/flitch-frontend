import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    token: string;
    expiryDate: string;
  }

  interface User {
    token: string;
    expiryDate: string;
  }
}
