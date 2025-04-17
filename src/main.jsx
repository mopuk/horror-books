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
import { useCurrentScroll } from "./utils/CurrentScroll.jsx";

import NavBar from "./components/Navbar/NavBar.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import CatalogPage from "./components/CatalogPage/CatalogPage.jsx";
import BookPage from "./components/BookPage/BookPage.jsx";
import GitHubLogo from "./assets/img/github-mark-white.svg";

const router = createBrowserRouter([
  {
    path: "/",
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
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/horror-books" />,
  },
]);

export function LayoutComponent() {
  const currentScroll = useCurrentScroll();
  return (
    <>
      <NavBar />
      <main>
        <div className={`top-btn ${currentScroll > 0 ? "enter" : "exit"}`}>
          <button
            onClick={(e) => {
              window.scrollTo({
                top: 0,
              });
            }}
          >
            ↑
          </button>
        </div>

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
