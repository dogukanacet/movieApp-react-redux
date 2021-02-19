import React, { Fragment } from "react";

import styles from "./Sidebar.module.css";

import Logo from "../UI/Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import NavigationItem from "./NavigationItem/NavigationItem";

const Sidebar = (props) => {
  return (
    <div className={styles.Sidebar}>
      <nav>
        <p>
          <Logo height="30px" width="30px" /> MovieStore
        </p>
        <SearchBar />
        <NavigationItem name="Home" />
        <NavigationItem name="Genres" />
      </nav>
    </div>
  );
};

export default Sidebar;
