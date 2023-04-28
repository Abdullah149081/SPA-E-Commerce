import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import cartProductLoader from "./cartProductLoader/cartProductLoader";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home";
import Order from "./components/Order/Order";
import Orders from "./components/Orders/Orders";
import "./index.css";
import Login from "./login/Login";
import AuthProvider from "./provider/AuthProvider";
import Register from "./Register/Register";

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
