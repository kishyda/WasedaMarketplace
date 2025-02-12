"use server";

import { getServerSession } from "next-auth";
import LogIn from "./LogIn";

export default async function Navbar() {
    const session = await getServerSession();
    return (
        <LogIn session={session} />
    );
}
