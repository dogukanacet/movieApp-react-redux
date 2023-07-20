import React, { useEffect, useRef } from "react";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        props.closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress, false);

    return () => {
      window.removeEventListener("keydown", handleKeyPress, false);
    };
  }, []);

  return <div className={styles.Modal}>{props.children}</div>;
};
export default Modal;
