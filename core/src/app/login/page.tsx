"use server";

import { getServerSession } from "next-auth";
import { AuthenticationForm } from "./Login";

export default async function Navbar() {
    const session = await getServerSession();
    if (session) {
        return (
            <div>
                Logged In
            </div>
        );
    } else {
        return (
            //<LogIn session={session} />
            <div>
                <AuthenticationForm />
            </div>
        );
    }
}
