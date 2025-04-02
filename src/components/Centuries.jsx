import React, { useState } from "react";
import useWindowDimensions from "../utils/windowDimensions.jsx";
import styles from "../styles/Centuries.module.css";
import { articles } from "../assets/articles";

const centuriesNums = [18, 19, 20, 21];
const letters = {
  18: "XVIII",
  19: "XIX",
  20: "XX",
  21: "XXI",
};

export default function Centuries() {
  const [chosenCentury, setChosenCentury] = useState(centuriesNums[0]);
  const [onHover, setOnHover] = useState(null);
  const { width, height } = useWindowDimensions();

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
                {section.images && (
                  <div
                    className={styles["image-container"]}
                    onMouseEnter={(e) => setOnHover(section.images.name)}
                    onMouseLeave={(e) => setOnHover(null)}
                  >
                    <a href={`${section.images.link || ""}`} target="_blank">
                      <img
                        src={section.images.src}
                        alt={section.images.alt}
                        width={section.images.width}
                        className={styles.bookCover}
                      />

                      <div
                        className={`${styles["image-desc-container"]} ${
                          width < 500 || onHover === section.images.name
                            ? styles.active
                            : ""
                        }`}
                      >
                        <p>{section.images.name}</p>
                        <p>{section.images.author}</p>
                        <p>{section.images.credits}</p>
                      </div>
                    </a>
                  </div>
                )}
                <div className={styles["section-content"]}>
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
