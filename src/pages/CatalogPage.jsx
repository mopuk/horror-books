import styles from "../styles/CatalogPage.module.css";
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { books } from "../assets/books.js";
import { useSearchParams } from "react-router-dom";

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchingBooks, setSearchingBooks] = useState({});
  const [viewType, setViewType] = useState("list");
  const query = searchParams.get("q") || "";

  useEffect(() => {
    setSearchingBooks(
      Object.fromEntries(
        Object.entries(books).filter(([index, book]) => {
          const pattern = new RegExp(
            query.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            "i"
          );
          return (
            book["name_en"].match(pattern) ||
            book["name_ru"].match(pattern) ||
            book["author_en"].match(pattern) ||
            book["author_ru"].match(pattern)
          );
        })
      )
    );
  }, [query]);

  return (
    <div className={styles.catalog}>
      <Sidebar setViewType={setViewType} />
      <div className={`${styles.books}`}>
        {Object.keys(searchingBooks).length !== 0 ? (
          <BookList books={searchingBooks} viewType={viewType} />
        ) : (
          <h2 className={styles["error-msg"]}>
            Книг по запросу {query} не найдено
          </h2>
        )}
      </div>
    </div>
  );
}
