import React, { useState } from "react";
import useWindowDimensions from "../../utils/windowDimensions.jsx";
import styles from "./Centuries.module.css";
import { articles } from "../../assets/articles.js";

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
    <div className={styles["centuries"]}>
      <CenturiesNav
        chosenCentury={chosenCentury}
        setChosenCentury={setChosenCentury}
      />
      <article className={styles["century"]}>
        {articles[chosenCentury] ? (
          Object.entries(articles[chosenCentury]).map(([key, section]) => {
            return (
              <section className={styles["section"]} key={key}>
                <h2 className={styles["section__header"]}>{section.heading}</h2>
                <div className={styles["section__content-container"]}>
                  <p className={styles["section__content"]}>
                  {section.images && (
                      <a
                        href={`${section.images.link || ""}`}
                        target="_blank"
                        className={styles["link"]}
                        onMouseEnter={(e) => setOnHover(section.images.name)}
                        onMouseLeave={(e) => setOnHover(null)}
                      >
                        <img
                          src={section.images.src}
                          alt={section.images.alt}
                          width={section.images.width}
                          className={styles["link__img"]}
                        />

                        <div
                          className={`${styles["link__description"]} ${
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
                    )}
                    {section.text}
                    
                  </p>
                </div>
              </section>
            );
          })
        ) : (
          <section className={styles["section"]}>
            <h2 className={styles["section__heading"]}>
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
    <nav className={styles["nav"]}>
      {centuriesNums.map((century) => {
        return (
          <button
            key={century}
            onClick={(e) => setChosenCentury(century)}
            className={`${styles["nav__btn"]} ${
              century === chosenCentury ? styles.chosen : ""
            }`}
          >
            <span className={styles["btn__text"]}>{letters[century]} век</span>
          </button>
        );
      })}
    </nav>
  );
}
