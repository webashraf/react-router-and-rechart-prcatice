import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductsDetails/ProductDetails";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/product",
        element: <Product></Product>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/products/:Id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.Id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
