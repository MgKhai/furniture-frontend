import { lazy, Suspense } from "react";
import { createBrowserRouter, redirect } from "react-router";
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
import { homeLoader, loginLoader } from "./router/loader";
import { loginAction, logoutAction } from "./router/action";
import SignupPage from "./pages/auth/SignUp";
import AuthRootLayout from "./pages/auth/AuthRootLayout";
import InputOtpPage from "./pages/auth/InputOtp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: HomePage, loader: homeLoader },
      { path: "about", Component: AboutPage },
      {
        path: "blog",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Blog />
              </Suspense>
            ),
          },
          {
            path: ":postId",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <BlogDetail />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "product",
        Component: ProductRootLayout,
        children: [
          { index: true, Component: ProductPage },
          { path: ":productId", Component: ProductDetail },
        ],
      },
    ],
  },
  {
    path: "login",
    Component: LoginPage,
    action: loginAction,
    loader: loginLoader,
  },
  {
    path: "register",
    Component: AuthRootLayout,
    children: [
      { index: true, Component: SignupPage },
      { path: "otp", Component: InputOtpPage },
    ],
  },
  {
    path: "logout",
    action: logoutAction,
    loader: () => redirect("/"),
  },
]);
