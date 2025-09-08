import React, { useState, useEffect } from "react";

const Main = ({ sendDataToParent, sendDataToParentRdm }) => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    sendDataToParent(count);
  }
  function handleClickRdm() {
    setCount(Math.floor(Math.random() * 100));
    sendDataToParentRdm(count);
  }
  return (
    <main>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickRdm}>Click</button>
    </main>
  );
};

export default Main;
