import React from "react";

import styles from "./Poster.module.css";

const poster = (props) => (
  <div className={styles.Poster}>
    {props.path ? (
      <img
        className={styles.MovieImage}
        src={"https:image.tmdb.org/t/p/original/" + props.path}
      />
    ) : (
      <span></span>
    )}
  </div>
);

export default poster;
