import React, { useState } from "react";
import styles from "./MainList.module.css";
import { FaTrash } from "react-icons/fa";
export default function MainList({ obj, handleRemove }) {
  const [isCheck, setisCheck] = useState(false);
  const handleDelete = (e) => {
    if (e.target.nodeName === "path") {
      handleRemove(obj.id);
    }
  };
  const handleChecked = (e) => {
    setisCheck((prev) => !prev);
    obj.isActive = isCheck;
  };
  return (
    <li className={styles.list} onClick={handleDelete}>
      <div className={styles.list__content}>
        <input checked={isCheck} type="checkbox" onChange={handleChecked} />
        <div className={isCheck ? styles.list__checkText : styles.list__text}>
          {obj.content}
        </div>
      </div>
      <div className={styles.list__icon}>
        <FaTrash />
      </div>
    </li>
  );
}
