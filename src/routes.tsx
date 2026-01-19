import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout.tsx";
import HomePage from "@/pages/Home.tsx";
import AboutPage from "@/pages/About.tsx";
import ErrorPage from "@/pages/Error.tsx";
import Blog from "@/pages/blogs/Blog.tsx";
import BlogRootLayout from "@/pages/blogs/BlogRootLayout.tsx";
import BlogDetail from "@/pages/blogs/Detail.tsx";
import ProductRootLayout from "@/pages/products/ProductRootLayout.tsx";
import ProductPage from "@/pages/products/Product.tsx";
import ProductDetail from "@/pages/products/Detail.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage />,
        children: [
            {index: true, Component: HomePage,},
            {path:'about', Component: AboutPage},
            {path: 'blog', Component:BlogRootLayout,
                children: [
                    {index: true, Component: Blog},
                    {path: ":postId", Component: BlogDetail}
                ]
            },
            {path: 'product', Component: ProductRootLayout,
                children: [
                    {index: true, Component: ProductPage},
                    {path: ":productId", Component: ProductDetail}
                ]
            },
        ]
    },
]);