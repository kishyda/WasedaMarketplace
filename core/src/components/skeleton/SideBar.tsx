"use client";

import { SearchComponent } from "@/components/search";
import { useState } from "react";

export default function SideBar() {
    return (
        <div className="fixed w-1/4 h-dvh flex-initial bg-stone-800 text-white overflow-y-auto">
            <SearchComponent></SearchComponent>
            <div className="m-3">Create Listing</div>
            <div className="m-3">Location</div>
            <div className="m-3">Categories</div>
        </div>
    );
}