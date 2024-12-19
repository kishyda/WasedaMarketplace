import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react"

export default async function Navbar() {
    // const { data: session } = useSession()
    const session = await getServerSession();

    if (session) {
        return (
            <>
                Signed in as {session.user?.email} <br />
                <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn("google")}>Sign in</button>
        </>
    )
}