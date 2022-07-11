import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import axios from 'axios';

const options = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Usuário e Senha",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@email.com" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
          const { data } = await axios.post(`${process.env.CMS_URL}/api/auth/local`, {
            identifier: credentials.email,
            password: credentials.password
          });

          if (data) {
            return data;
          }else {
            return null;
          }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account && user) {
        return {
          ...token,
          accessToken: user.jwt,
          userData: user.user,
        };
      }
      return token
    },
    async signIn({ user, account, profile }) {

      if (account.provider === "google") {
        //return profile.email_verified && profile.email.endsWith("@idxcode.com.br")
        return user
      }
      if (account.provider === "credentials") {
        return user
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
    
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.user = token.userData
      return session
    },
    async getSession({ session, token, user }){
      session.jwt = user.jwt;
      session.user = user.user;
      return Promise.resolve(session);
    },
    async getToken({ token, user, account, profile, isNewUser }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.access_token}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
