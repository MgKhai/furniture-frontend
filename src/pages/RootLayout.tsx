import {Outlet} from "react-router";
import Header from "@/components/layouts/Header.tsx";
import Footer from "@/components/layouts/Footer.tsx";

function RootLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 mt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;