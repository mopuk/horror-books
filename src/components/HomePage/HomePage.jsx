import styles from "./HomePage.module.css";
import React, { useState } from "react";
import Centuries from "../Centuries/Centuries.jsx";


export default function Home() {
  return (
    <div className={styles["home"]}>
      <div className={styles["home__title"]}>
        <h1>HORROR BOOKS</h1>
        <h2>Узнайте, как эволюционировал жанр ужасов</h2>
        <h2>на протяжении веков</h2>
      </div>
      <Centuries />
    </div>
  );
}
