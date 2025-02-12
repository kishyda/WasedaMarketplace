import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default async function Header() {
    const session = await getServerSession();
    return (
        <div className="fixed top-0 flex flex-row h-24 w-full bg-stone-800 text-white">
            <div className="flex flex-row flex-grow items-center">
                <div className="m-6">Logo</div>
            </div>
            <div className="flex flex-row justify-evenly items-center w-1/6">
                <div>Cart</div>
                <div>Messages</div>
                {session ? <div>Profile</div> : <div>Login</div>}
            </div>
        </div>
    );
}