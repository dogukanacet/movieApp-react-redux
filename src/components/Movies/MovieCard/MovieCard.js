import React from "react";
import styles from "./MovieCard.module.css";

const movieCard = (props) => {
  return (
    <div onClick={props.clicked} className={styles.MovieCard}>
      <img
        id="poster"
        src={
          props.poster
            ? "https://image.tmdb.org/t/p/original" + props.poster
            : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
        }
      />
      <p>{props.title}</p>
    </div>
  );
};

export default movieCard;
