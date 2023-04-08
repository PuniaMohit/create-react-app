import { useEffect, useState } from "react";
import "./input.css";

const Input = ({ updateTask, printInput }) => {
  const [input, setInput] = useState("");
  const [colorInput, setColorInput] = useState(false);

  const update = (event) => {
    setInput(event.target.value);
  };

  const add = () => {
    let value = input;
    if (value === "") {
      setColorInput(true);
    } else {
      setColorInput(false);
      setInput("");
      updateTask(value);
    }
  };

  useEffect(() => {
    setInput(printInput);
  }, [printInput]);
  return (
    <>
      <input
        className={colorInput ? "input-red" : "submit-input"}
        type="text"
        onChange={update}
        value={input}
        placeholder="Your Todo..."
      />
      <button className="submit" onClick={add}>
        Submit
      </button>
    </>
  );
};

export default Input;
