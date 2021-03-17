import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={styles.NavigationItem}>
    <NavLink
      style={{ color: "white", textDecoration: "none" }}
      activeStyle={{ color: "#e00073" }}
      exact={props.exact}
      to={props.path}
    >
      {props.name}
    </NavLink>
  </li>
);

export default navigationItem;
