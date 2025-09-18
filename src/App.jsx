import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);

  const Handlefocus = () => {
    inputElement.current.focus();
    inputElement.current.value = "Tawhid";
    console.log(inputElement.current);
  };
  return (
    <>
      <h1>App</h1>
      <input type="text" ref={inputElement} />
      <button onClick={() => Handlefocus()}>click me</button>
    </>
  );
};

export default App;
