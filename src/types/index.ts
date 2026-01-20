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

export type Product = {
    id: string,
    name: string,
    description: string,
    images: string[],
    categoryId: string,
    price: number,
    discount: number,
    rating: number,
    inventory: number,
    status: string
};

export type Post = {
    id: string,
    author: string,
    title: string,
    content: string,
    image: string,
    body: string,
    updated_at: string,
    tags: string[]
};

export interface FilterItem{
    id: string,
    label: string,
}

export interface FilterItemWithChildren extends FilterItem{
    types? : FilterItem[];
    categories?: FilterItem[];
}

export type MainFilterItem = FilterItemWithChildren;