import React from "react";

import styles from "./Button.module.css";

const button = (props) => (
  <button
    title="Button"
    value=""
    type="submit"
    style={{ fontSize: props.fontSize }}
    className={styles.Button}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default button;
