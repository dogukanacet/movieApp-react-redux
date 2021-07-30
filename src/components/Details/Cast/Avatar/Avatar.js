import React from "react";

import styles from "./Avatar.module.css";

const avatar = (props) => (
  <div className={styles.UiCard}>
    <span>
      <img
        src={
          props.avatar
            ? "https://image.tmdb.org/t/p/original" + props.avatar
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
        alt="Avatar"
        className={styles.Avatar}
      />
      <br />
      {props.character}
      <br />
      {props.name}
    </span>
  </div>
);

export default avatar;
