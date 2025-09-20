import { useRef } from "react";
import { FocusInput } from "./components/FocusInput";
import Timer from "./components/Timer";

const App = () => {
  return (
    <>
      <h1>App</h1>

      <FocusInput />
      <Timer />
    </>
  );
};

export default App;
