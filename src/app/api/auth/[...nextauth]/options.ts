import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../(models)/User.model";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "your-email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your-password",
                },
            },
            async authorize(credentials) : Promise<any> {
                try {
                    if (!credentials) {
                        return null;
                    }
                    const foundUser : any  = await User.findOne({ email: credentials.email }).lean().exec();
                    if (foundUser) {
                        const match = await bcrypt.compare(
                            credentials.password,
                            foundUser.password,
                        );
                        if (match) {
                            delete (foundUser as any).password;
                            return foundUser;
                        }
                    }
                    return null;
                } catch (err) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: JWT }) {
            session.user = token.user;
            return session;
        },
    },
};
