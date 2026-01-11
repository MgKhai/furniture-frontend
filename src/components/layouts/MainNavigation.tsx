"use client"
import * as React from "react"
import {Link} from "react-router";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import type {MainNavItem} from "@/types";
import { Icons } from "@/components/ui/icons";
import {siteConfig} from "@/config/site.ts";

interface MainNavigationProps {
    items?: MainNavItem[]
}

function MainNavigation({items}: MainNavigationProps) {

    return (
        <div className="hidden gap-7 lg:flex mx-3">
            <Link to="/" className="flex items-center space-x-2">
                <Icons.logo className="size-8" aria-hidden="true" />
                <span className="font-bold text-lg">{siteConfig.name}</span>
                <span className="sr-only">Home</span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList className="flex-wrap">
                    {items?.[0]?.card && (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                {items[0].title}
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                                href="/"
                                            >
                                                <div className="mb-2 text-lg font-medium sm:mt-4">
                                                    {siteConfig.name}
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    {siteConfig.description}
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>

                                    {items[0].card.map((item) => (
                                        <ListItem
                                            key={item.title}
                                            href={item.href ?? ""}
                                            title={item.title}
                                        >
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )}

                    {items?.[0].menu && (
                        items[0].menu.map((item) => (
                            <NavigationMenuItem>
                                <NavigationMenuLink>
                                    <Link to={item.href ?? ""}>{item.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
function ListItem({
                      title,
                      children,
                      href,
                      ...props
                  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default MainNavigation;
