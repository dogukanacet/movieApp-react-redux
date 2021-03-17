import React from "react";

import styles from "./Logo.module.css";

import logoPng from "../../../assets/logo.png";

const logo = (props) => (
  <img
    src={logoPng}
    className={styles.Logo}
    height={props.height}
    width={props.width}
    alt="Logo"
  />
);
export default logo;
