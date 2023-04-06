import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Order from "./components/Order/Order";
import "./index.css";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Order></Order>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
