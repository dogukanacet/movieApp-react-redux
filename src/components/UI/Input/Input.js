import React from "react";

import styles from "./Input.module.css";

import Button from "../Button/Button";

const input = (props) => {
  // let inputValue = "";

  // let inputValueHandler = (e) => {
  //   inputValue = e.target.value;
  // };

  return (
    <div className={props.withButton ? styles.InputWithButton : styles.Input}>
      <input
        id="id"
        type="text"
        name="search"
        onFocus={(event) => (event.target.value = "")}
        placeholder={props.placeholder}
        autoComplete="off"
        onChange={props.changed}
        // onChange={(e) => inputValueHandler(e)}
      />
      {props.withButton ? (
        <Button clicked={props.clicked} fontSize="25px">
          <div className={[styles[props.buttonTextStyle]].join(" ")}>
            {props.buttonText}
          </div>
        </Button>
      ) : null}
    </div>
  );
};

export default input;
