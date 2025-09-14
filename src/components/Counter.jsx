import { useReducer, useState } from "react";
import { countReducer, initialState } from "../functions/CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const [inputvalue, setInputValue] = useState(0);
  return (
    <>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <div>
        <input
          type="number"
          value={inputvalue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() =>
            dispatch({ type: "icrementByAmount", payload: +inputvalue })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrementByAmount", payload: inputvalue })
          }
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Counter;
