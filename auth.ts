import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
export const {handlers,signIn,signOut,auth}=NextAuth({providers:[...(process.env.AUTH_GOOGLE_ID&&process.env.AUTH_GOOGLE_SECRET?[Google({clientId:process.env.AUTH_GOOGLE_ID,clientSecret:process.env.AUTH_GOOGLE_SECRET})]:[]),...(process.env.AUTH_GITHUB_ID&&process.env.AUTH_GITHUB_SECRET?[GitHub({clientId:process.env.AUTH_GITHUB_ID,clientSecret:process.env.AUTH_GITHUB_SECRET})]:[])],pages:{signIn:"/login"},session:{strategy:"jwt"}});