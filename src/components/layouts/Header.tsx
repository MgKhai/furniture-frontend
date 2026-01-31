import MainNavigation from "@/components/layouts/MainNavigation.tsx";
import MobileNavigation from "@/components/layouts/MobileNavigation.tsx";
import {siteConfig} from "@/config/site.ts";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import AuthDropDown from "@/components/layouts/AuthDropDown";
import {User} from "@/data/users.ts";
import CartSheet from "@/components/layouts/CartSheet.tsx";

function Header() {
    return (
    <header className="w-full border-b fixed top-0 z-50 overflow-hidden bg-background">
        <nav className="container m-auto flex items-center  h-16">
            <MainNavigation items={siteConfig.mainNav} />
            <MobileNavigation items={siteConfig.mainNav} />
            <div className="flex items-center flex-1 justify-end gap-2">
                <CartSheet />
                <ModeToggle />
                <AuthDropDown user={User} />
            </div>
        </nav>
    </header>
    );
}

export default Header;