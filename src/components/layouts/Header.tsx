import MainNavigation from "@/components/layouts/MainNavigation.tsx";
import MobileNavigation from "@/components/layouts/MobileNavigation.tsx";
import { siteConfig } from "@/config/site.ts";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import AuthDropDown from "@/components/layouts/AuthDropDown";
import { User } from "@/data/users.ts";
import CartSheet from "@/components/layouts/CartSheet.tsx";
import ProgressBar from "../progress-bar";

function Header() {
  return (
    <header className="bg-background fixed top-0 z-50 w-full border-b">
      <nav className="container m-auto flex h-16 items-center">
        <ProgressBar />
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end gap-2 pr-2 xl:pr-0">
          <CartSheet />
          <ModeToggle />
          <AuthDropDown user={User} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
