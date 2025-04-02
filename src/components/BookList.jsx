import React from "react";
import styles from "../styles/BookList.module.css";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../utils/windowDimensions";

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
  const { width, height } = useWindowDimensions();
  const plot = info.sections.find(section => section.id == "plot");

  return (
    <>
      <img src={info.image} alt={info.name_en} width={50} height={75}></img>
      <div className={styles["info-container"]}>
        <h2 className={styles["book-title"]}>
          {info.name_ru} ({info.year})
        </h2>
        <h3 className={styles["book-author"]}>{info.author_ru}</h3>
        <p className={styles["book-plot"]}>
          {plot
            ? width < 500
              ? plot.content.slice(0, 100) + "..."
              : width < 1000
              ? plot.content.slice(0, 175) + "..."
              : plot.content.slice(0, 200) + "..."
            : ""}
        </p>
      </div>
    </>
  );
}
