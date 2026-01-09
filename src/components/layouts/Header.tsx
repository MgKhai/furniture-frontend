import MainNavigation from "@/components/layouts/MainNavigation.tsx";
import MobileNavigation from "@/components/layouts/MobileNavigation.tsx";
import {siteConfig} from "@/config/site.ts";
import {ModeToggle} from "@/components/mode-toggle.tsx";

function Header() {
    return (
    <header className="w-full border-b">
        <nav className="container m-auto flex items-center  h-16">
            <MainNavigation items={siteConfig.mainNav} />
            <MobileNavigation items={siteConfig.mainNav} />
            <div className="flex items-center flex-1 justify-end">
                <ModeToggle />
            </div>
        </nav>
    </header>
    );
}

export default Header;