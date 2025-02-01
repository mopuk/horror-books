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
      <div  className={styles['book-info']}>
        <img src={book.image} alt={book['name_en']} width={100} height={150}/>
        <h1>{book.name_ru}</h1>
        <h2>
          {book.author_ru} ({book.year})
        </h2>
      </div>
      {Object.entries(book.sections).map(([index, section]) => {
        return (
          <section className={styles["book-section"]} key={index}>
            <h2 className={styles['section-title']}>{section.name}</h2>
            <p className={styles['section-content']}>{section.content}</p>
          </section>
        );
      })}
    </article>
  );
}
