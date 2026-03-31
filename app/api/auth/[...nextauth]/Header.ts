import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({

  providers: [
    CredentialsProvider({

      name: "Credentials",

      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials) {

        if (
          credentials?.email === "admin@glucoseverified.com" &&
          credentials?.password === "123456"
        ) {
          return {
            id: "1",
            name: "User",
            email: credentials.email
          };
        }

        return null;
      }
    })
  ],

  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/login"
  },

  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };