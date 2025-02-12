import Header from "./Header";
import SideBar from "./SideBar";

export default function Skeleton({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="h-24"></div>
            <div className="h-full flex flex-row">
                <SideBar />
                <div className="h-full flex-grow m-6">
                    {children}
                </div>
            </div>
        </>
    );
}