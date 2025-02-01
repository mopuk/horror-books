import styles from "../styles/HomePage.module.css";
import React, { useState } from "react";
import { articles } from "../assets/articles";

const centuriesNums = [18, 19, 20, 21];
const letters = {
  18: "XVIII",
  19: "XIX",
  20: "XX",
  21: "XXI",
};

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>HORROR BOOKS</h1>
        <h2>Узнайте, как эволюционировал жанр ужасов</h2>
        <h2>на протяжении веков</h2>
      </div>
      <Centuries />
    </div>
  );
}

function Centuries() {
  const [chosenCentury, setChosenCentury] = useState(centuriesNums[0]);

  return (
    <div id="centuries">
      <CenturiesNav
        chosenCentury={chosenCentury}
        setChosenCentury={setChosenCentury}
      />
      <Century chosenCentury={chosenCentury} />
    </div>
  );
}

function CenturiesNav({ chosenCentury, setChosenCentury }) {
  return (
    <nav>
      {centuriesNums.map((century) => {
        return (
          <button
            key={century}
            onClick={(e) => setChosenCentury(century)}
            className={`${styles["centuries-nav-btn"]} ${
              century === chosenCentury ? styles.chosen : ""
            }`}
          >
            {letters[century]} век
          </button>
        );
      })}
    </nav>
  );
}
function Century({ chosenCentury }) {
  return (
    <div className={styles.century}>
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
    </div>
  );
}
