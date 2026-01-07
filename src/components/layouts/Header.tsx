import MainNavigation from "@/components/layouts/MainNavigation.tsx";
// import { siteConfig } from "@/config/site.ts";

function Header() {
    return (
    <header className="w-full border-b">
        <div className="container m-auto flex items-center  h-16">
            <MainNavigation />
        </div>
    </header>
    );
}

export default Header;