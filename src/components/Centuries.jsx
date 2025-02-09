import React, { useState } from "react";
import styles from "../styles/Centuries.module.css";
import { articles } from "../assets/articles";

const centuriesNums = [18, 19, 20, 21];
const letters = {
  18: "XVIII",
  19: "XIX",
  20: "XX",
  21: "XXI",
};

export default function CenturyContainer() {
  const [chosenCentury, setChosenCentury] = useState(centuriesNums[0]);

  return (
    <div className={styles["centuries-container"]}>
      <CenturiesNav
        chosenCentury={chosenCentury}
        setChosenCentury={setChosenCentury}
      />
      <article className={styles.century}>
        {articles[chosenCentury] ? (
          Object.entries(articles[chosenCentury]).map(([key, section]) => {
            return (
              <section className={styles.section} key={key}>
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.heading}
                    width={100}
                    height={150}
                    className={styles.bookCover}
                  />
                )}
                <div className={styles["book-info"]}>
                  <h2 className={styles.heading}>{section.heading}</h2>
                  <p className={styles["plain-text"]}>{section.text}</p>
                </div>
              </section>
            );
          })
        ) : (
          <section className={styles.section}>
            <h2 className={styles.heading}>
              The article for {chosenCentury} century is not here
            </h2>
          </section>
        )}
      </article>
    </div>
  );
}

function CenturiesNav({ chosenCentury, setChosenCentury }) {
  return (
    <nav className={styles["centuries-nav"]}>
      {centuriesNums.map((century) => {
        return (
          <button
            key={century}
            onClick={(e) => setChosenCentury(century)}
            className={`${styles["centuries-btn"]} ${
              century === chosenCentury ? styles.chosen : ""
            }`}
          >
            <span className={styles["btn-text"]}>{letters[century]} век</span>
          </button>
        );
      })}
    </nav>
  );
}
