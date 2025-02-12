import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest } from "next/server";

type Parameters = {
    ListingID: string,
    ListerAccountID: string,
    ListingTitle: string,
    ListingDescription: string,
    ListingPrice: number,
    Area: string[]
}

class Listing {
    ListingID: string;
    ListerAccountID: string;
    ListingTitle: string;
    ListingDescription: string;
    ListingPrice: number;
    Area: string[];
    constructor(params: Parameters) {
        this.ListingID = params.ListingID;
        this.ListerAccountID = params.ListerAccountID;
        this.ListingTitle = params.ListingTitle;
        this.ListingDescription = params.ListingDescription;
        this.ListingPrice = params.ListingPrice;
        this.Area = params.Area;
    }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params;
    const { client, db } = await connectToDatabase();
    const collection = db.collection("listings");
    const listing = await collection.findOne({ ListingID: id });
    if (listing === null) {
        console.log("didn't find the listing");
        return new Response(null, {
            status: 404
        })
    }
    console.log("FOund the listing");
    return new Response(JSON.stringify(listing), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    })
}

export async function POST(req: NextRequest) {
    const { client, db } = await connectToDatabase();
    const collection = db.collection("listings");
    const params = await req.json();

    const newListing = {
        ListingID: params.ListingID,
        ListerAccountID: params.ListerAccountID,
        ListingTitle: params.ListingTitle,
        ListingDescription: params.ListingDescription,
        ListingPrice: params.ListingPrice,
        Area: params.Area,
    }

    try {
        const result = await collection.insertOne(newListing);
        return new Response(
            JSON.stringify({ message: "Document inserted successfully", document: result }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify({ message: "Failed to insert document", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

// CURRENT LISTING OBJECT
// {
//     "ListingID": "someID",
//     "ListerAccountID": "someAccountID",
//     "ListingTitle": "someTitle",
//     "ListingDescription": "someDescription",
//     "ListingPrice": "1000yen",
//     "Area": "[MainCampus, WISH]"
// }
