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
        value={props.value}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        autoComplete="off"
        onChange={(e) => props.onChange(e)}
        // onChange={(e) => inputValueHandler(e)}
      />
      {props.withButton ? (
        <Button onClick={props.onClick} fontSize="25px">
          <div className={[styles[props.buttonTextStyle]].join(" ")}>
            {props.buttonText}
          </div>
        </Button>
      ) : null}
    </div>
  );
};

export default input;
