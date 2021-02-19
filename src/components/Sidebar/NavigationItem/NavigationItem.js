import React from "react";

import styles from "./NavigationItem.module.css";

const NavigationItem = (props) => (
  <ul className={styles.NavigationItem}>
    <li>
      <a>{props.name}</a>
    </li>
  </ul>
);

export default NavigationItem;
