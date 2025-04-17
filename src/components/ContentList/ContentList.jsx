import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./ContentList.module.css";

export default function ContentList({ source }) {
  const [isOpen, setIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const links = useLinks(source);
  const headersRef = useRef();

  useEffect(() => {
    const headersHeight = headersRef.current.offsetHeight;
    setContainerHeight(isOpen ? headersHeight : 0);
  }, [isOpen, links]);

  return (
    <aside className={styles["content-list"]}>
      <div
        className={styles["content-list__header"]}
        onClick={(e) => setIsOpen((prev) => !prev)}
      >
        <h2>Содержание</h2>
        <span
          className={styles["content-list__open-btn"]}
          style={{ transform: `${isOpen ? "rotate(-90deg)" : ""}` }}
        >
          ◄
        </span>
      </div>

      <div
        className={styles["content-list__headers-container"]}
        style={{ height: `${containerHeight}px` }}
      >
        <ul
          className={`${styles["content-list__headers"]} ${isOpen ? styles.opened : ""}`}
          ref={headersRef}
        >
          {links.map(({ id, header }) => {
            if (header) {
              return (
                <li key={id} className={styles["content-list__item"]}>
                  <HashLink to={`#${id}`} className={styles["content-list__link"]}>
                    {header}
                  </HashLink>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </aside>
  );
}

function useLinks(source) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linksArray = Array.from(
      Object.entries(source).map(([_, section]) => {
        return { id: section.id, header: section.name };
      })
    );
    setLinks(linksArray);
  }, [source]);

  return links;
}
