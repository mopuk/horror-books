import React from "react";
import ContentList from "../ContentList/ContentList.jsx";
import { useParams } from "react-router-dom";
import { books } from "../../assets/books";
import styles from "./BookPage.module.css";

export default function BookPage() {
  const params = useParams();
  const id = params.id;
  const book = books[id];

  return (
    <article className={styles["book"]}>
      <div className={styles["book__info"]}>
        <img src={book.image} alt={book["name_en"]} width={100} height={150} />
        <h1>{book.name_ru}</h1>
        <h2>
          {book.author_ru} ({book.year})
        </h2>
      </div>
      <ContentList source={book.sections} />
      {Object.entries(book.sections).map(([index, section]) => {
        return (
          <Section
            name={section?.name}
            content={section.content}
            id={section.id}
            key={index}
          />
        );
      })}
    </article>
  );
}

function Section({ name, content, id }) {
  return (
    <section className={styles["section"]}>
      <h2 className={styles["section__title"]} id={id}>
        {name}
      </h2>
      {Array.isArray(content) ? (
        <ul>
          {content.map((topic, index) => {
            return (
              <Topic title={topic.name} text={topic.content} key={index} />
            );
          })}
        </ul>
      ) : (
        <div className={styles["section__content"]}>
          <p className={styles["section__content__text"]}>{content}</p>
        </div>
      )}
    </section>
  );
}

function Topic({ title, text }) {
  return (
    <li className={styles["section__content"]}>
      {title && <h2 className={styles["section__content__header"]}>{title}</h2>}
      <p className={styles["section__content__text"]}>{text}</p>
    </li>
  );
}
