import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout.tsx";
import HomePage from "@/pages/Home.tsx";
import AboutPage from "@/pages/About.tsx";
import ErrorPage from "@/pages/Error.tsx";
import Blog from "@/pages/blogs/Blog.tsx";
import BlogRootLayout from "@/pages/blogs/BlogRootLayout.tsx";
import BlogDetail from "@/pages/blogs/Detail.tsx";

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
        ]
    },
]);