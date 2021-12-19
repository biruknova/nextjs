import React from "react";
import Popup from "reactjs-popup";
import styles from "../styles/CustomPopUp.module.css";
import PopUpComp from "./PopUpComp";

export default ({ open, movie }) => (
  <Popup open={open} modal nested>
    {(close) => (
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>
          &times;
        </button>
        <div className={styles.header}> Modal Title </div>
        <div className={styles.content}>
          {" "}
          <PopUpComp />
          <PopUpComp />
          <PopUpComp />
          <PopUpComp />
          <PopUpComp />
          <PopUpComp />
          <PopUpComp />
          <PopUpComp />
        </div>
      </div>
    )}
  </Popup>
);
