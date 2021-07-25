import React from "react";

import styles from "./Modal.module.css";

const logo = (props) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
    }
  };
  return (
    <div className={styles.Modal} onKeyPress={handleKeyPress}>
      {props.children}
    </div>
  );
};
export default logo;
