import React from "react";

import styles from "./GenreCard.module.css";

const genreCard = (props) => (
  <div onClick={props.clicked} className={styles.GenreCard}>
    <span>{props.name}</span>
  </div>
);

export default genreCard;
