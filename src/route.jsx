import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FabricPage from "./pages/FabricPage";
import FabricItem from "./pages/FabricItem";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";

export const route = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "fabric",
        Component: FabricPage,
      },
      {
        path: "fabric/:id",
        Component: FabricItem,
      },
    ],
  },
  {
    path: "/cart",
    Component: CartPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "*",
    Component: () => <Navigate to="/" />,
  },
]);
