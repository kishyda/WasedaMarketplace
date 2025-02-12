import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/skeleton/Header"
import SideBar from "@/components/skeleton/SideBar"
import "../globals.css"
import type React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-col">
        <Header />
        <div className="h-full flex flex-row pt-24">
          <SideBar />
          <div className="w-1/4"></div>
          <div className="h-full flex-grow m-6">
            {children} </div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}