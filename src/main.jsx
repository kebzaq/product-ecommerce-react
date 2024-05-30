import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./ProductPage.jsx";
import Products from "./Products.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import Sidebar from "./Sidebar.jsx";
// Singleton here
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/sidebar",
        element: <Sidebar />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:name",
        element: <ProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>
);
