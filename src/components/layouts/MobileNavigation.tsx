import { Link } from "react-router";
import type {MainNavItem} from "@/types";
import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site.ts";
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface MobileNavigationProps {
    items? : MainNavItem[];
}

function MobileNavigation({items}: MobileNavigationProps) {
    const [isDesktop, setIsDesktop] = useState(false)
    const query = "(min-width: 1024px)";

    useEffect(() => {
        function onChange(event : MediaQueryListEvent) {
            setIsDesktop(event.matches);
        }
        const result = matchMedia(query);
        result.addEventListener("change", onChange );
        return () => result.removeEventListener("change", onChange);
    }, [query] );

    if(isDesktop) {
        return null;
    }
    return (
      <div className="lg:hidden mx-3">
          <Sheet>
              <SheetTrigger asChild>
                  <Button variant="ghost">
                      <Icons.hamburgerMenu aria-hidden={"true"} />
                      <span className="sr-only">Toggle Menu</span>
                      </Button>
              </SheetTrigger>
              <SheetContent className="w-full pt-12 ps-10" side="left">
                  <SheetClose asChild>
                      <Link to="/" className="flex flex-row items-center gap-3 ">
                          <Icons.logo className="size-6"/>
                          <span className="font-bold">{siteConfig.name}</span>
                          <span className="sr-only">Home</span>
                      </Link>
                  </SheetClose>
                  <ScrollArea className="h-full w-full  ps-0 pe-5">
                        {items?.[0]?.card && (
                            <Accordion
                                type="multiple"
                                className="w-full border-b"

                            >
                                  <AccordionItem value={items[0].title}>
                                    <AccordionTrigger>{items[0].title}</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-3 text-balance text-muted-foreground">
                                      {items[0].card.map((item) => (
                                          <SheetClose asChild>
                                              <Link to={item.href ?? ""} key={item.title}>{item.title}</Link>
                                          </SheetClose>
                                      ))}
                                     </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                              )}
                      <div className="flex flex-col gap-3 text-sm pt-2">
                          {items?.[0]?.menu && (
                              items[0].menu.map((item) => (
                                  <SheetClose asChild>
                                      <SheetClose asChild>
                                          <Link to={item.href ?? ""} key={item.title}>{item.title}</Link>
                                      </SheetClose>
                                  </SheetClose>
                              ) )
                          )}
                      </div>
                  </ScrollArea>
                  {/*<SheetHeader>*/}
                  {/*    /!*<SheetTitle>Edit profile</SheetTitle>*!/*/}
                  {/*    /!*<SheetDescription>*!/*/}
                  {/*    /!*    Make changes to your profile here. Click save when you&apos;re done.*!/*/}
                  {/*    /!*</SheetDescription>*!/*/}
                  {/*</SheetHeader>*/}
                  {/*<SheetFooter>*/}
                  {/*    /!*<Button type="submit">Save changes</Button>*!/*/}
                  {/*    /!*<SheetClose asChild>*!/*/}
                  {/*    /!*    <Button variant="outline">Close</Button>*!/*/}
                  {/*    /!*</SheetClose>*!/*/}
                  {/*</SheetFooter>*/}
              </SheetContent>
          </Sheet>
      </div>
    );
}

export default MobileNavigation;