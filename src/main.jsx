import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom"

import NavBar from './NavBar.jsx'
import Catalog from "./pages/Catalog.jsx";
import Book from './pages/Book.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutComponent />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "catalog",
            element: <Catalog />,
            children: [
              {
                path: ":title",
                element: <Book />,
              }
            ]
          },
        ]
    },
]);

function LayoutComponent() {
  return (
    <div id="main-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
