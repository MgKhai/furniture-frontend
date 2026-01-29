import {lazy, Suspense} from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout.tsx";
import HomePage from "@/pages/Home.tsx";
import AboutPage from "@/pages/About.tsx";
import ErrorPage from "@/pages/Error.tsx";
import ProductRootLayout from "@/pages/products/ProductRootLayout.tsx";
import ProductPage from "@/pages/products/Product.tsx";
import ProductDetail from "@/pages/products/Detail.tsx";

const Blog = lazy(() => import("@/pages/blogs/Blog.tsx"));
const BlogDetail = lazy(() => import("@/pages/blogs/Detail.tsx"));
const BlogRootLayout = lazy(() => import("@/pages/blogs/BlogRootLayout.tsx"));

import LoginPage from "@/pages/auth/Login.tsx";
import RegisterPage from "@/pages/auth/Register.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage />,
        children: [
            {index: true, Component: HomePage,},
            {path:'about', Component: AboutPage},
            {path: 'blog', element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <BlogRootLayout />
                    </Suspense>,
                children: [
                    {index: true, element:
                            <Suspense fallback={<div>Loading...</div>}>
                                <Blog />
                            </Suspense>},
                    {path: ":postId", element:
                            <Suspense fallback={<div>Loading...</div>}>
                                <BlogDetail />
                            </Suspense>}
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
    {
        path: "login",
        Component: LoginPage
    },
    {
        path: "register",
        Component: RegisterPage
    }
]);