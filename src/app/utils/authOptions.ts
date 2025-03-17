import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: "NEXTGENAIRESUMESCANNER",
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const users = [
                    { id: "1", email: "pjbhatt203@gmail.com", password: "Admin@123" },
                ];

                const user = users.find(
                    (u) =>
                        u.email === credentials?.email &&
                        u.password === credentials?.password
                );

                return user || null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
};