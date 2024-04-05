import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from './db';
import { comparePassword } from './query/hash';

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials, _) {
        if (!credentials) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const compare = await comparePassword({
          hashedPwd: user.password,
          enteredPwd: credentials.password,
        });

        if (!compare) {
          return null;
        }

        return {
          id: user.email,
          email: user.email,
        };
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
