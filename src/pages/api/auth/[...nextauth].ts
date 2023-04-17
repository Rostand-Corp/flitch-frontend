import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, {
  type NextAuthOptions,
  type Session,
  type User,
} from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import routes from '@config/routes';

const sessionAge = 30 * 24 * 60 * 60; // 30 days

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const options: NextAuthOptions = {
    session: {
      strategy: 'jwt',
      maxAge: sessionAge,
    },
    pages: {
      signIn: routes.signIn,
    },
    providers: [
      CredentialsProvider({
        name: 'credentials',
        type: 'credentials',
        credentials: {},
        authorize: async (credentials) => {
          const { access } = credentials as {
            access: string;
          };

          if (access) {
            return {
              token: access,
              accessTokenExpires: new Date().toISOString(),
            } as unknown as User;
          }

          return null;
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (token || user) {
          const tokenData = {} as JWT;
          const { accessToken, accessTokenExpires } = user || token;

          tokenData.accessToken = accessToken;
          tokenData.accessTokenExpires = accessTokenExpires;

          return tokenData;
        }

        return token;
      },

      async session({ session, token }) {
        if (token) {
          const sessionData: Session = {
            ...session,
            accessToken: token.accessToken as string,
            accessTokenExpires: token.accessTokenExpires as string,
          };

          return sessionData;
        }

        return session;
      },
    },
  };

  return NextAuth(req, res, options);
}
