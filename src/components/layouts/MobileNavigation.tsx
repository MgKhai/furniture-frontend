// import { Link } from "react-router";
// import type {MainNavItem} from "@/types";
//
import { Icons } from "@/components/ui/icons";
// import { siteConfig } from "@/config/site.ts";

import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"

// interface MobileNavigationProps {
//     items? : MainNavItem[];
// }

function MobileNavigation() {
    return (
      <div className="lg:hidden">
          <Sheet>
              <SheetTrigger asChild>
                  <Button variant="ghost">
                      <Icons.hamburgerMenu aria-hidden={"true"} />
                      <span className="sr-only">Toggle Menu</span>
                      </Button>
              </SheetTrigger>
              <SheetContent className="w-full pt-6" side="left">
                  <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                      </SheetDescription>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                      <div className="grid gap-3">
                          {/*<Label htmlFor="sheet-demo-name">Name</Label>*/}
                          {/*<Input id="sheet-demo-name" defaultValue="Pedro Duarte" />*/}
                      </div>
                      <div className="grid gap-3">
                          {/*<Label htmlFor="sheet-demo-username">Username</Label>*/}
                          {/*<Input id="sheet-demo-username" defaultValue="@peduarte" />*/}
                      </div>
                  </div>
                  <SheetFooter>
                      <Button type="submit">Save changes</Button>
                      <SheetClose asChild>
                          <Button variant="outline">Close</Button>
                      </SheetClose>
                  </SheetFooter>
              </SheetContent>
          </Sheet>
      </div>
    );
}

export default MobileNavigation;