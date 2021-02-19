import React from "react";
import styles from "./MovieCards.module.css";

const MovieCards = (props) => {
  return (
    <div className={styles.MovieCards}>
      <img
        id="poster"
        src={"https://image.tmdb.org/t/p/original" + props.poster}
      />
      <p>{props.title}</p>
    </div>
  );
};

export default MovieCards;
