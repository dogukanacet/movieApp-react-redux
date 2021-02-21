import React, { Fragment } from "react";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => (
  <div className={styles.SearchBar}>
    <input type="text" name="search" placeholder="Search" />
  </div>
);

export default SearchBar;
