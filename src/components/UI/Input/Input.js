import React, { Fragment } from "react";

import styles from "./Input.module.css";
import { Link, withRouter } from "react-router-dom";

import Button from "../Button/Button";

const input = (props) => {
  return (
    <div className={props.withButton ? styles.InputWithButton : styles.Input}>
      <input
        type="text"
        name="search"
        placeholder={props.placeholder}
        autoComplete="off"
        onChange={props.changed}
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
