


import { Home } from "../pages/Home/Home";

import type { RouteObject } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Collections } from "../pages/Collections/Collections";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { Cart } from "../pages/Cart/Cart";
import { Wholesale } from "../pages/Wholesale/Wholesale";
import { BlogGuide } from "../pages/Blog/BlogGuides/BlogGuide";
import { BlogDetails } from "../pages/Blog/BlogDetails/BlogDetails";
import { MainLayout } from "../components/layouts/MainLayout";


const routes: RouteObject[] = [
    {
         element: <MainLayout/>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/collections", element: <Collections /> },
            { path: "/products/buffalo", element: <ProductDetails /> },
            { path: "/cart", element: <Cart /> },
            { path: "/pages/wholesale", element: <Wholesale /> },
            { path: "/blogs/brew-guide", element: <BlogGuide /> },
            {
                path: "/blogs/brew-guide/vietnamese-phin-filter",
                element: <BlogDetails />,
            },
        ],
    },
     { path: "/login", element: <Login /> },
];

export default routes;