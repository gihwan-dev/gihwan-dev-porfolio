import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
        return {
          id: credentials.email,
          email: credentials.email,
        };
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
