import React from "react";
import { Rnd } from "react-rnd";
import styles from "./Button.module.scss";
export const Button = ({ title, ...remainProps }) => (
  <Rnd
    default={{
      x: 0,
      y: 0,
      width: 200,
      height: 300,
    }}
    className={styles.customBtn}
  >
    <button {...remainProps}>{title}</button>
  </Rnd>
);
