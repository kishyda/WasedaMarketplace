"use client";

import { useState } from "react";

export default function Home() {
    const [example, setExample] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    return (
        <div className="grid grid-cols-5 auto-rows-min gap-5 h-full" style={{ gridTemplateColumns: 'repeat(auto-fit, 250px)' }}>
            {example.map(v => <div className="aspect-square bg-blue-300" key={v}>hi</div>)}
        </div>
    );
}
