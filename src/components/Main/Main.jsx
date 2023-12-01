import React, { useEffect, useRef, useState } from "react";
import MainList from "../MainList/MainList";
import styles from "./Main.module.css";
export default function Main({ text, isChange }) {
  const [list, setList] = useState([]);
  const [state, setState] = useState({
    all: true,
    active: false,
    completed: false,
  });
  const id = useRef(0);
  useEffect(() => {
    if (text) {
      setList([...list, { id: id.current, content: text, isActive: true }]);
      id.current += 1;
    }
  }, [text]);
  const handleRemove = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const handleState = (e) => {
    const trueState = e.target.innerText.toLowerCase();
    setState({
      all: false,
      active: false,
      completed: false,
      [trueState]: true,
    });
    e.target.classList.add(`${styles.active}`);
  };
  const handleList = () => {
    if (state.active) {
      const newList = list.filter((item) => item.isActive);
      return newList;
    }
    if (state.completed) {
      const newList = list.filter((item) => item.isActive == false);
      return newList;
    }
    return list;
  };
  return (
    <div className={isChange ? styles.default : styles.main}>
      <div onClick={handleState} className={styles.states}>
        <div className={state.all ? styles.active : styles.state}>All</div>
        <div className={state.active ? styles.active : styles.state}>
          Active
        </div>
        <div className={state.completed ? styles.active : styles.state}>
          Completed
        </div>
      </div>
      <ul className={styles.lists}>
        {handleList().map((obj) => (
          <MainList key={obj.id} obj={obj} handleRemove={handleRemove} />
        ))}
      </ul>
    </div>
  );
}
