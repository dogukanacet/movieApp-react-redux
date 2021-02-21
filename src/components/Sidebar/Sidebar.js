import React, { Fragment } from "react";

import styles from "./Sidebar.module.css";

import Logo from "../UI/Logo/Logo";
import SearchBar from "../UI/SearchBar/SearchBar";
import Button from "../UI/Button/Button";
import NavigationItem from "./NavigationItem/NavigationItem";

const Sidebar = (props) => {
  return (
    <div className={styles.Sidebar}>
      <nav>
        <div style={{ display: "inline-flex" }}>
          <Logo height="35px" width="35px"></Logo>
          <p className={styles.Title}>&#160; MovieStore</p>
        </div>
        <div className={styles.Search}>
          <SearchBar />
          <Button fontSize="25px">
            <div className={styles.Icon}>&#9740;</div>
          </Button>
        </div>
        <NavigationItem name="Home" />
        <NavigationItem name="Genres" />
      </nav>
    </div>
  );
};

export default Sidebar;
