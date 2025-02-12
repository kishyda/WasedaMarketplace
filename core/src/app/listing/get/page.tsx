'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function ListingsPage() {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    const [text, setText] = useState("");
    const [listing, setListing] = useState("");
    const [error, setError] = useState("");

    const getListing = async (text: string) => {
        try {
            const result = await fetch(`/api/listing/${text}`);
            if (!result.ok) {
                setError("Something went wrong with the fetch call");
                throw new Error("not ok response");
            }
            setError('');
            const body = await result.json();
            router.push(`/listing/get/${text}`);
            setListing(JSON.stringify(body, null, 4));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div>This is the page to get a listing</div>
            <div id="container">
                <input value={text} onChange={(val) => setText(val.target.value)} placeholder="enter listing id"></input>
                <button onClick={() => getListing(text)}>Get listing</button>
                <div>{error}</div>
                <div>{listing}</div>
            </div>
        </div>
    )
}

