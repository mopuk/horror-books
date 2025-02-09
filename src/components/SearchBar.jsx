import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ isCatalog }) {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const inputRef = useRef();

  useEffect(() => {
    setInputVal(query);
  }, [query]);

  useEffect(() => {
    if (isCatalog) {
      inputRef.current.focus();
    }
  }, [isCatalog]);

  function handleSearch(e) {
    if (e.target.tagName === "BUTTON" || e.key === "Enter") {
      const params = new URLSearchParams();
      params.set("q", inputVal);
      setSearchParams(params, {
        preventScrollReset: true,
      });
      if (!isCatalog) {
        navigate(`/horror-books/catalog?q=${inputVal}`);
        return;
      }
    }
  }

  return (
    <>
      <div className={styles["search-bar"]} onKeyDown={handleSearch}>
        <input
          ref={inputRef}
          className={styles["search-bar-input"]}
          type="search"
          placeholder={isCatalog ? "Книги здесь" : "Поиск в каталоге"}
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button
          className={styles["search-btn"]}
          onClick={handleSearch}
          title="search-button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.85 30.125L17.6125 19.8875C16.8 20.5375 15.8656 21.0521 14.8094 21.4313C13.7531 21.8104 12.6292 22 11.4375 22C8.48542 22 5.98698 20.9776 3.94219 18.9328C1.8974 16.888 0.875 14.3896 0.875 11.4375C0.875 8.48542 1.8974 5.98698 3.94219 3.94219C5.98698 1.8974 8.48542 0.875 11.4375 0.875C14.3896 0.875 16.888 1.8974 18.9328 3.94219C20.9776 5.98698 22 8.48542 22 11.4375C22 12.6292 21.8104 13.7531 21.4313 14.8094C21.0521 15.8656 20.5375 16.8 19.8875 17.6125L30.125 27.85L27.85 30.125ZM11.4375 18.75C13.4688 18.75 15.1953 18.0391 16.6172 16.6172C18.0391 15.1953 18.75 13.4688 18.75 11.4375C18.75 9.40625 18.0391 7.67969 16.6172 6.25781C15.1953 4.83594 13.4688 4.125 11.4375 4.125C9.40625 4.125 7.67969 4.83594 6.25781 6.25781C4.83594 7.67969 4.125 9.40625 4.125 11.4375C4.125 13.4688 4.83594 15.1953 6.25781 16.6172C7.67969 18.0391 9.40625 18.75 11.4375 18.75Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
