import React from "react";
import { Fragment } from "react";

import styles from "./Cast.module.css";

import Avatar from "./Avatar/Avatar";

const cast = (props) => {
  let avatar = props.cast.map((castAvatar) => {
    return (
      <Avatar
        key={castAvatar.id}
        name={castAvatar.original_name}
        character={castAvatar.character}
        avatar={castAvatar.profile_path}
      />
    );
  });

  return (
    <Fragment>
      <div
        onClick={props.clicked}
        className={
          props.active
            ? `${styles.CastButton} ${styles.active}`
            : styles.CastButton
        }
      >
        CAST
      </div>
      <div
        className={
          props.active ? `${styles.Cast} ${styles.active}` : styles.Cast
        }
      >
        {avatar}
      </div>
    </Fragment>
  );
};

export default cast;
