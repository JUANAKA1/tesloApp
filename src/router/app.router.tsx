import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";


import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { DashboardPage } from "@/admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "@/admin/pages/product/AdminProductPage";
import { AdminProductsPage } from "@/admin/pages/products/AdminProductsPage";


import { LoginPage } from "@/auth/pages/login/LoginPage";
import { RegisterPage } from "@/auth/pages/register/RegisterPage";

import { ShopLayout } from "@/shop/layouts/ShopLayout";
import { GenderPage } from "@/shop/pages/gender/GenderPage";
import { HomePage } from "@/shop/pages/home/HomePage";
import { ProductPage } from "@/shop/pages/product/ProductPage";

const AuthLayout = lazy(() => import("@/auth/layouts/AuthLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:idSlug",
        element: <ProductPage />,
      },
      {
        path: "gender/:gender",
        element: <GenderPage />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "product/:id",
        element: <AdminProductPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
