import { useEffect, useState } from "react";
import "./input.css";

const TodoAddTaskInput = ({
  updateTodo,
  todoTaskForEditing,
  takingPresentInputValue,
}) => {
  const [input, setInput] = useState("");
  const [colorAddTaskInputBorder, setColorAddTaskInputBorder] = useState(false);

  const addTodoTaskInInputForEditing = () => {
    const value = input;
    if (value === "") {
      setColorAddTaskInputBorder(true);
    } else {
      setColorAddTaskInputBorder(false);
      setInput("");
      updateTodo(value);
    }
  };

  useEffect(() => {
    setInput(todoTaskForEditing);
  }, [todoTaskForEditing]);
  return (
    <>
      <input
        className={
          colorAddTaskInputBorder
            ? "todo-addtask-input-red"
            : "todo-addtask-input"
        }
        type="text"
        onChange={(event) => {
          setInput(event.target.value);
          takingPresentInputValue(event.target.value);
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
