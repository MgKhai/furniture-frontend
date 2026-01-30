import {Link} from "react-router";
import {Icons} from "@/components/ui/icons.tsx"
import {LoginForm} from "@/components/auth/LoginForm.tsx";
import Banner from "@/data/images/house.webp";

function LoginPage(){
    return (
       <div className="relative">
           <Link to="/" className="fixed top-6 left-8 flex items-center text-lg font-bold traking-tigh text-foreground/80 hover:text-foreground transition-colors">
               <Icons.logo className="size-6 mr-2 " aria-hidden="true" />
               <span>Furniture</span>
           </Link>
           <div className="grid min-h-screen lg:grid-cols-2 grid-cols-1">

               <div className="flex items-center justify-center xl:p-0 pb-6 px-2">
                   <LoginForm className="h-130" />
               </div>
               <div className="hidden lg:block">
                   <img src={Banner} alt="furniture shop" className="h-full object-cover" />
               </div>
           </div>
       </div>
    );
}

export default LoginPage;