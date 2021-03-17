import React from "react";
import styles from "./MovieCard.module.css";

const movieCard = (props) => {
  return (
    <div className={styles.MovieCard}>
      <img
        id="poster"
        src={"https://image.tmdb.org/t/p/original" + props.poster}
      />
      <p>{props.title}</p>
    </div>
  );
};

export default movieCard;
