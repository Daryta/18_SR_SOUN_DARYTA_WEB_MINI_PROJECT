
import CredentialProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import { loginService } from "@/service/auth.service";
import { to } from "../../../../../postcss.config.cjs";

export const authOption = {
    providers:[
        //login by email and password
        CredentialProvider({
            async authorize(userInfo){
                // define object structure
                const newUserInfo ={
                    email: userInfo.email,
                    password: userInfo.password
                }
                // Call Login service
                const login = await loginService(newUserInfo);
                if (login?.status === 400) {
                    throw new Error(login?.detail);
                  }
                return login;
            },

        })
    ],

    //used to set token into cookies
    callbacks: {
        async jwt({token, user}){
            return {...token, ...user};
        },
        async session({session,token}){
            session.user = token;
            return session;
        }
    }

}
const handler = nextAuth(authOption);
export {handler as GET , handler as POST};