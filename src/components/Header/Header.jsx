import React, { useState } from "react";
import KeyEffect from "../KeyEffect/KeyEffect";
import Textbar from "../Textbar/Textbar";
import styles from "./Header.module.css";
export default function Header({ handleText, handleKeyPress }) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>JUST DO IT.</div>
      <Textbar handleKeyPress={handleKeyPress} handleText={handleText} />
    </div>
  );
}
