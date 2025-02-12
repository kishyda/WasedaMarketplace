import { Bell, ShoppingCart } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <ShoppingCart className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">MarketPlace</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/products">Products</Link>
                        <Link href="/categories">Categories</Link>
                        <Link href="/deals">Deals</Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Input type="search" placeholder="Search..." className="w-full md:w-[300px] lg:w-[400px]" />
                    </div>
                    <Button size="icon" variant="ghost">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Button size="sm">Sign In</Button>
                </div>
            </div>
        </header>
    )
}

