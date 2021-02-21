import React from "react";

import styles from "./Button.module.css";

const Button = (props) => (
  <button
    title="Button"
    value=""
    type="submit"
    style={{ fontSize: props.fontSize }}
    className={styles.Button}
  >
    {props.children}
  </button>
);

export default Button;
