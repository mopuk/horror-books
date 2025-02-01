import React from "react";
import useWindowDimensions from "../utils/windowDimensions";
import styles from "../styles/BookList.module.css";
import { useNavigate } from "react-router-dom";

export default function BookList({ books }) {
  const navigate = useNavigate();

  return (
    <ul className={styles["book-list"]}>
      {Object.entries(books).map(([index, book]) => {
        return (
          <li
            key={index}
            className={styles.book}
            onClick={(e) => navigate(`/horror-books/catalog/${index}`)}
          >
            <Book info={book} />
          </li>
        );
      })}
    </ul>
  );
}

function Book({ info }) {
  const windowDimensions = useWindowDimensions();
  return (
    <>
      <img src={info.image} alt={info.name_en} width={50} height={75}></img>
      <div className={styles["info-container"]}>
        <h2 className={styles["book-title"]}>
          {info.name_ru} ({info.year})
        </h2>
        <h3 className={styles["book-author"]}>{info.author_ru}</h3>
        <p className={styles["book-plot"]}>
          {info.plot
            ? windowDimensions.width < 500
              ? info.plot.slice(0, 100) + "..."
              : windowDimensions.width < 1000
              ? info.plot.slice(0, 175) + "..."
              : info.plot.slice(0, 200) + "..."
            : ""}
        </p>
      </div>
    </>
  );
}
