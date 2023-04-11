import { useEffect, useState } from "react";
import "./input.css";

const TodoAddTaskInput = ({ updateTodo, todoTaskForEditing }) => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const addTodoTaskInInputForEditing = () => {
    const value = input;
    if (value === "") {
      setIsError(true);
    } else {
      setIsError(false);
      setInput("");
      updateTodo(value);
    }
  };

  useEffect(() => {
    console.log("hello1");
    setIsError(false);
    setInput(todoTaskForEditing);
  }, [todoTaskForEditing]);

  return (
    <>
      <input
        className={isError ? "todo-addtask-input-red" : "todo-addtask-input"}
        type="text"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        value={input}
        placeholder="Your Todo..."
      />
      <button className="submit" onClick={addTodoTaskInInputForEditing}>
        Submit
      </button>
    </>
  );
};

export default TodoAddTaskInput;
