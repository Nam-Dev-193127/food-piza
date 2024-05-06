
import * as mongoose from "mongoose";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/User";
import bcrypt from 'bcrypt';

const handler = NextAuth({
  secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
          name: "Credentials",
          id: "credentials",
          credentials: {
            username: { label: "Email", type: "email", placeholder: "test@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const email = credentials?.email;
            const password = credentials?.password;

            mongoose.connect(process.env.MONGO_URL);
            const user = await User.findOne({email});
            const passwordOk = user && bcrypt.compareSync(password, user.password);

            
            if(passwordOk) {
              return user;
            }
//2:27:26

              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            
          }
        })
      ]
})

export {handler as GET, handler as POST}