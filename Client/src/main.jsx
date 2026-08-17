import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Provider} from "react-redux"
import "./index.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/Products/Products";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import Admin from "./Admin/Admin";
import AdminLogin from "./Admin/AdminLogin";
import { InitialLoader } from "./Components";
import {store} from './Store/store'

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
      { path: "contact-us", element: <Contact /> },
      { path: "admin", element: <Admin /> },
      { path: "admin/login", element: <AdminLogin /> },
      // Catch-all route for 404
      { path: "*", element: <NotFound /> },
      // { path: "contact-us", element: <Contact /> },
      // { path: "shop/:category", element: <Shop /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InitialLoader>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </InitialLoader>
  </StrictMode>,
);
