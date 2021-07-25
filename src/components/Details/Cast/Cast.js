import React from "react";
import { Fragment } from "react";

import styles from "./Cast.module.css";

const cast = (props) => (
  <Fragment>
    <a className={styles.CastButton}>CAST</a>
    <div className={styles.Cast}>
      <div className={styles.UiCard}>
        <span>
          <img
            src="https://image.tmdb.org/t/p/original"
            alt="Avatar"
            className={styles.Avatar}
          />
          <br />
          <br />
        </span>
      </div>
    </div>
  </Fragment>
);

export default cast;
