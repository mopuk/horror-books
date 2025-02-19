import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar({ source }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = useLinks(source);

  return (
    <aside className={styles.side}>
      <div
        className={styles["side-header"]}
        onClick={(e) => setIsOpen((prev) => !prev)}
      >
        <h2>Содержание</h2>
        <span className={styles["open-button"]}>▼</span>
      </div>

      <ul
        className={`${styles.headers} ${
          isOpen ? styles.opened : ""
        }`}
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
