import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { InitialLoader } from "./Components";

// Add more pages here as you build them
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
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
