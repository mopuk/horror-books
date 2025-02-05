import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../assets/books";
import styles from "../styles/BookPage.module.css";

export default function BookPage() {
  const params = useParams();
  const id = params.id;
  const book = books[id];

  return (
    <article className={styles["container"]}>
      <div className={styles["book-info"]}>
        <img src={book.image} alt={book["name_en"]} width={100} height={150} />
        <h1>{book.name_ru}</h1>
        <h2>
          {book.author_ru} ({book.year})
        </h2>
      </div>
      {Object.entries(book.sections).map(([index, section]) => {
        return (
          <section className={styles["book-section"]} key={index}>
            <h2 className={styles["section-title"]}>{section.name}</h2>
            {Array.isArray(section.content) ? (
              <ul>
                {section.content.map((val, ind) => (
                  <li key={ind} className={styles['section-content-container']}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                    >
                      <path
                        d="m14.707 11.293-4-4A1 1 0 0 0 9 8v8a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414z"
                        fill="#dddddd"
                        data-name="Right"
                      />
                    </svg>
                    <pre className={styles["section-content"]}>{val}</pre>
                  </li>
                ))}
              </ul>
            ) : (
              <pre className={styles["section-content"]}>{section.content}</pre>
            )}
          </section>
        );
      })}
    </article>
  );
}
