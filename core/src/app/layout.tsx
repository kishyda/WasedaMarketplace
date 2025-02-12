import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import Header from "@/components/skeleton/Header"
import SideBar from "@/components/skeleton/SideBar"
import type React from "react"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="h-screen w-screen flex flex-col">
                {children}
            </body>
        </html>
    )
}