import React, { Fragment } from "react";

import styles from "./SearchBar.module.css";

import Button from "../UI/Button/Button";

const SearchBar = (props) => (
  <div className={styles.SearchBar}>
    <input type="text" name="search" placeholder="Search" />
    <Button />
  </div>
);

export default SearchBar;
