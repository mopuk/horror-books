import styles from "../styles/HomePage.module.css";
import React, { useState } from "react";
import Centuries from "../components/Centuries.jsx";


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
