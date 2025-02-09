import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";

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
import BookPage from "./pages/BookPage.jsx";
import GitHubLogo from "./assets/github-mark-white.svg";

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
        element: <BookPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
  {
    path: "/",
    element: <Navigate to="/horror-books" />,
  },
]);

export function LayoutComponent() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>2025</p>{" "}
        <a href="https://github.com/mopuk" className="link">
          <img
            src={GitHubLogo}
            alt="Git Hub Logo"
            width={20}
            height={20}
            className="logo"
          ></img>
          <span>MopuK</span>
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
