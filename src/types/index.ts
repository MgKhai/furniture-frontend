export interface NavItem{
    title: string;
    href?: string;
    description?: string;
}

export interface NavItemWithChildren extends NavItem{
    card?: NavItemWithChildren[];
    menu?: NavItemWithChildren[];
    title: string;
}

export type MainNavItem = NavItemWithChildren;
