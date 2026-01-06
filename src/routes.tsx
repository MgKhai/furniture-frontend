import { createBrowserRouter } from "react-router";
import RootLayout from "@/pages/RootLayout.tsx";
import HomePage from "@/pages/Home.tsx";
import ContactPage from "@/pages/Contact.tsx";
import ErrorPage from "@/pages/Error.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, Component: HomePage,
            },
            {
                path:'contact', Component: ContactPage
            }

        ]
    },
]);