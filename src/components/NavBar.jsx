import { Link, useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "../utils/windowDimensions.jsx";
import SearchBar from "./SearchBar";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const { width, height } = useWindowDimensions();

  return (
    <nav className={styles["nav"]}>
      <Link to="/horror-books/home" className={styles["link"]}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 33 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.625 33.75V17.5H21.375V33.75M1.875 12.625L16.5 1.25L31.125 12.625V30.5C31.125 31.362 30.7826 32.1886 30.1731 32.7981C29.5636 33.4076 28.737 33.75 27.875 33.75H5.125C4.26305 33.75 3.4364 33.4076 2.8269 32.7981C2.21741 32.1886 1.875 31.362 1.875 30.5V12.625Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>ГЛАВНАЯ</p>
      </Link>
      <Link to="/horror-books/catalog" className={styles["link"]}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 35 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 2.75H32.125M11 12.5H32.125M11 22.25H32.125M2.875 2.75H2.89125M2.875 12.5H2.89125M2.875 22.25H2.89125"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p>КАТАЛОГ</p>
      </Link>
      {width > 700 && (
        <div className={styles["search-bar-container"]}>
          <SearchBar />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
