import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, {
  type NextAuthOptions,
  type Session,
  type User,
} from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import { TOKEN_EXPIRATION } from '@config/constants';
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
    callbacks: {
      async jwt({ token, user }) {
        if (token || user) {
          const tokenData = {} as JWT;
          const { token: accessToken, expiryDate } = user || token;

          tokenData.token = accessToken;
          tokenData.expiryDate = expiryDate;

          return tokenData;
        }

        return token;
      },

      async session({ session, token }) {
        if (token) {
          const sessionData: Session = {
            ...session,
            token: token.accessToken as string,
            expiryDate: token.expiryDate as string,
          };

          return sessionData;
        }

        return session;
      },
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
              expiryDate: Date.now() + TOKEN_EXPIRATION * 1000,
            } as unknown as User;
          }

          return null;
        },
      }),
    ],
  };

  return NextAuth(req, res, options);
}
