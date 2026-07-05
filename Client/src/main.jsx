import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/Products/Products";
import { InitialLoader } from "./Components";

// Add more pages here as you build them
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
      // Product details page with dynamic route parameter
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "products", element: <Products /> },
      // { path: "contact-us", element: <Contact /> },
      // { path: "shop/:category", element: <Shop /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InitialLoader>
      <RouterProvider router={router} />
    </InitialLoader>
  </StrictMode>,
);
