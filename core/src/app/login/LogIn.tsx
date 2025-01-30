"use client";

import { signIn, signOut } from "next-auth/react";

export default function LogIn({ session }: { session: any }) {
    if (!session) {
        return (
            <div>
                <h1>Log In Page</h1>
                <button onClick={() => signIn("google")}>Sign in</button>
            </div>
        );
    } else if (session) {
        return (
            <div>
                <h1>Log In Page</h1>
                <p>Already signed in as {session.user.email}</p>
                <button onClick={() => signOut()}></button>
            </div>
        );
    } else {
        return <div>loading...</div>
    }
}
