import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import cartProductLoader from "./cartProductLoader/cartProductLoader";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Order from "./components/Order/Order";
import Orders from "./components/Orders/Orders";
import "./index.css";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
