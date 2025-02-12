"use server";

import { getServerSession } from "next-auth";
import { AuthenticationForm } from "./Login";

export default async function Navbar() {
    const session = await getServerSession();
    return (
        <LogIn session={session} />
    );
}
