import React, { useState } from "react";
import Header from "./components/Header/Header";
import KeyEffect from "./components/KeyEffect/KeyEffect";
import Main from "./components/Main/Main";

export default function AppTodoList() {
  const [text, setText] = useState("");
  const [isChange, setisChange] = useState(false);

  const handleText = (text) => {
    setText(text);
  };
  const handleKeyPress = (boolean) => {
    if (boolean) {
      setisChange(true);
    } else {
      setisChange(false);
    }
  };
  return (
    <>
      {isChange && <KeyEffect />}
      <Header handleKeyPress={handleKeyPress} handleText={handleText} />
      <Main text={text} isChange={isChange} />
    </>
  );
}
