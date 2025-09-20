import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);
  const FocusInputs = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="CLICK THE BUTTON TO FOCUS"
      />
      <button onClick={FocusInputs}>Focus</button>
    </div>
  );
};
