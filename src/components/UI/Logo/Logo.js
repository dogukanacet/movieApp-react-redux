import React from "react";

import styles from "./Logo.module.css";

import logoPng from "../../../assets/logo.png";

const Logo = (props) => (
  <img
    src={logoPng}
    className={styles.Logo}
    height={props.height}
    width={props.width}
    alt="Logo"
  />
);
export default Logo;
