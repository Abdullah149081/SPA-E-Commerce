import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import cartProductLoader from "./cartProductLoader/cartProductLoader";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home";
import Order from "./components/Order/Order";
import Orders from "./components/Orders/Orders";
import ProceedCheckout from "./components/ProceedCheckout/ProceedCheckout";
import "./index.css";
import Login from "./login/Login";
import AuthProvider from "./provider/AuthProvider";
import Register from "./Register/Register";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Order></Order>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <Register></Register>,
      },
      {
        path: "/proceed-checkout",
        element: (
          <PrivateRoutes>
            <ProceedCheckout></ProceedCheckout>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
