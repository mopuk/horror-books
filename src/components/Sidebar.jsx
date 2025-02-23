import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar({ source }) {
  const [isOpen, setIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const links = useLinks(source);
  const headersRef = useRef();

  useEffect(() => {
    const headersHeight = headersRef.current.offsetHeight;
    setContainerHeight(isOpen ? headersHeight : 0);
  }, [isOpen, links]);

  return (
    <aside className={styles.side}>
      <div
        className={styles["side-header"]}
        onClick={(e) => setIsOpen((prev) => !prev)}
      >
        <h2>Содержание</h2>
        {/* {isOpen ? "▼" : "◄"} */}
        <span
          className={styles["open-button"]}
          style={{ transform: `${isOpen ? "rotate(-90deg)" : ""}` }}
        >
          ◄
        </span>
      </div>

      <div
        className={styles["headers-container"]}
        style={{ height: `${containerHeight}px` }}
      >
        <ul
          className={`${styles.headers} ${isOpen ? styles.opened : ""}`}
          ref={headersRef}
        >
          {links.map(({ id, header }) => {
            if (header) {
              return (
                <li key={id}>
                  <HashLink to={`#${id}`} className={styles.link}>
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
