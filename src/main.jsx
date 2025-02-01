import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import BookPage from "./pages/BookPage.jsx"

const router = createBrowserRouter([
  {
    path: "horror-books",
    element: <LayoutComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "catalog/:id",
        element: <BookPage />
      }
    ],
  },
  {
    path: "/",
    element: <Navigate to="/horror-books" /> 
  },
]);

export function LayoutComponent() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>By <span><a href="">MopuK</a></span></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
