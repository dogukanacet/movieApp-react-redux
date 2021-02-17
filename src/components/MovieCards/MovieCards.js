import React from "react";
import styles from "./MovieCards.module.css";

const MovieCards = (props) => {
  return (
    <div className={styles.MovieCards}>
      <img
        id="poster"
        src="https://i.pinimg.com/originals/6a/f3/52/6af3526e192068c211cef13dfe33a533.jpg"
      />
      <p>poster name</p>
    </div>
  );
};

export default MovieCards;
