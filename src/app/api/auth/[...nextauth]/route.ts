import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // whether email is valid
        // TODO 独自認可項目を付与 https://next-auth.js.org/configuration/callbacks
        const user = { id: "1", name: "taniyuu", email: "sample@example.com" };
        if (user.email === credentials?.email) {
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login", // disable to view default page
    error: "/login", // disable to view default page
    verifyRequest: "/login", // disable to view default page
    newUser: "/login", // disable to view default page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
