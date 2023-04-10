import { useState } from "react";
import "./list.css";
import TodoAddTaskInput from "../input/input";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

const TodoList = () => {
  const [indexCheck, setIndexCheck] = useState([]);
  const [list, setList] = useState(["xyz", "abc"]);
  const [todoTaskForEditing, setTodoTaskForEditing] = useState("");

  const showTaskCompleted = (event, index) => {
    const { checked } = event.target;
    if (checked === true) {
      setIndexCheck((oldArray) => [...oldArray, index]);
    } else {
      setIndexCheck(indexCheck.filter((item) => item !== index));
    }
  };

  const updateTodo = (value) => {
    setList((oldArray) => [...oldArray, value]);
  };

  const editTodo = (index) => {
    const taskValue = list[index];
    setList(list.filter((item) => item !== taskValue));
    setTodoTaskForEditing(taskValue);
  };

  return (
    <div>
      {list.map((element, index) => {
        return (
          <div className="list" key={index}>
            <div>
              <input
                type="checkbox"
                id={index}
                name={index}
                value={element.task}
                onClick={(event) => {
                  showTaskCompleted(event, index);
                }}
                key={index}
              />
              <label for={index}>{element}</label>
            </div>
            <div>
              <Icon.PencilSquare
                className="edit-button"
                onClick={() => {
                  editTodo(index);
                }}
              >
                Edit
              </Icon.PencilSquare>
              {indexCheck.includes(index) ? (
                <button className="clickShowButton">Complete</button>
              ) : (
                <div className="if-not-button"></div>
              )}
            </div>
          </div>
        );
      })}
      <h4>Todo</h4>
      <TodoAddTaskInput
        updateTodo={updateTodo}
        todoTaskForEditing={todoTaskForEditing}
      />
    </div>
  );
};

export default TodoList;
