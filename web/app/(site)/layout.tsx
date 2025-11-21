import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TopHeader />
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
        </>
    );
}
