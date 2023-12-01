import React from "react";
import Textbar from "../Textbar/Textbar";
import styles from "./KeyEffect.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
export default function KeyEffect() {
  return (
    <div className={styles.keyEffect}>
      <div className={styles.canclebtn}>
        <MdArrowBackIosNew />
      </div>
    </div>
  );
}
