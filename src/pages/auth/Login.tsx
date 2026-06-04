import { Link } from "react-router";
import { Icons } from "@/components/ui/icons.tsx";
import { LoginForm } from "@/components/auth/LoginForm.tsx";
import Banner from "@/data/images/house.webp";

function LoginPage() {
  return (
    <div className="relative">
      <Link
        to="/"
        className="traking-tigh text-foreground/80 hover:text-foreground fixed top-6 left-8 flex items-center text-lg font-bold transition-colors"
      >
        <Icons.logo className="mr-2 size-6" aria-hidden="true" />
        <span>Furniture</span>
      </Link>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="mx-auto grid max-w-sm place-items-center px-6 pb-6 xl:p-0">
          <LoginForm className="h-115" />
        </div>
        <div className="hidden lg:block">
          <img
            src={Banner}
            alt="furniture shop"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
