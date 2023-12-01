import React, { useState } from "react";
import KeyEffect from "../KeyEffect/KeyEffect";
import styles from "./Textbar.module.css";
export default function Textbar({ handleText, handleKeyPress }) {
  const [text, setText] = useState("");
  const [isPress, setisPress] = useState(false);
  const handleChange = (e) => {
    setText(e.target.value);
    handleKeyPress(true);
    setisPress(true);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter" && text.trim().length > 0) {
      handleText(text);
      handleKeyPress(false);
      setisPress(false);
      setText("");
    }
  };

  const handleBlur = (e) => {
    handleKeyPress(false);
    setisPress(false);
    setText("");
  };
  return (
    <div className={isPress ? styles.activeBar : styles.textBar}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyUp={handleEnter}
        onBlur={handleBlur}
      />
    </div>
  );
}
