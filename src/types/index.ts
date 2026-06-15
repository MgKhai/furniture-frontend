export interface NavItem {
  title: string;
  href?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  card?: NavItemWithChildren[];
  menu?: NavItemWithChildren[];
  title: string;
}

type Image = {
  id: number;
  path: string;
};

type UserName = {
  fullName: string;
};

type Tag = {
  name: string;
};

export type MainNavItem = NavItemWithChildren;

export type Product = {
  id: number;
  name: string;
  description: string;
  images: Image[];
  categoryId: string;
  price: number;
  discount: number;
  rating: number;
  inventory: number;
  status: string;
};

export type Post = {
  id: number;
  author: UserName;
  title: string;
  content: string;
  image: string;
  body: string;
  updated_at: string;
  tags: Tag[];
};

export interface FilterItem {
  id: string;
  label: string;
}

export interface FilterItemWithChildren extends FilterItem {
  types?: FilterItem[];
  categories?: FilterItem[];
}

export type MainFilterItem = FilterItemWithChildren;

export type User = {
  id: string;
  firstName: string;
  secondName: string;
  userName: string;
  email: string;
  imageUrl: string;
};

export type Cart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: {
    id: string;
    name: string;
    url: string;
  };
  category: string;
  subcategory: string;
};
