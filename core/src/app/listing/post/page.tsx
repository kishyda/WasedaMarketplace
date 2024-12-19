"use client";

import { list } from "postcss";
import { useState } from "react";

export default function PostListing() {

    const [postResult, setPostResult] = useState('');

    const [ListingID, setListingID] = useState('');
    const [ListerAccountID, setListerAccountID] = useState('');
    const [ListingTitle, setListingTitle] = useState('');
    const [ListingDescription, setListingDescription] = useState('');
    const [ListingPrice, setListingPrice] = useState('');
    const [Area, setArea] = useState<string[]>([]);

    const addArea = (area: string) => {
        if (Area === null || Area === undefined) {
            const Area = [area];
            setArea(Area);
        } else if (Area?.includes(area)) {
            return
        } else {
            const temp = [...Area];
            temp.push(area);
            setArea(temp);
        }
    }

    const makeListing = async () => {
        const response = await fetch(`/api/listing/${ListingID}`, {
            method: "POST",
            body: JSON.stringify({
                ListingID: ListingID,
                ListerAccountID: ListerAccountID,
                ListingTitle: ListingTitle,
                ListingDescription: ListingDescription,
                ListingPrice: ListingPrice,
                Area: Area,
            })
        })
        const jsonResponse = await response.json();
        setPostResult(jsonResponse.message);
    }
    return (
        <div>
            <input value={ListingID} onChange={(val) => setListingID(val.target.value)} placeholder="Enter ListingID"></input>
            <input value={ListerAccountID} onChange={(val) => setListerAccountID(val.target.value)} placeholder="Enter ListerAccountID"></input>
            <input value={ListingTitle} onChange={(val) => setListingTitle(val.target.value)} placeholder="Enter ListingTitle"></input>
            <input value={ListingDescription} onChange={(val) => setListingDescription(val.target.value)} placeholder="Enter ListingDescription"></input>
            <input value={ListingPrice} onChange={(val) => setListingPrice(val.target.value)} placeholder="Enter ListingPrice"></input>
            <select multiple name="items" id="items">
                <option onClick={() => addArea("Waseda")}>Waseda</option>
                <option onClick={() => addArea("Nishi-Waseda")}>Nishi-Waseda</option>
                <option onClick={() => addArea("WID")}>WID</option>
                <option onClick={() => addArea("Toyama")}>Toyama</option>
            </select>
            <button onClick={makeListing}>Make Listing</button>
            <div>{postResult}</div>
        </div >
    );
}
