import { useState } from "react";
import "./list.css";
import TodoAddTaskInput from "../input/input";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

const TodoList = () => {
  const [list, setList] = useState([
    { name: "xyz", complete: false },
    { name: "abc", complete: false },
  ]);
  const [todoTaskForEditing, setTodoTaskForEditing] = useState("");
  const showTaskCompleted = (complete, index) => (event) => {
    const { checked } = event.target;
    let newArr = list.map((item, i) => {
      if (checked === true) {
        if (index === i) {
          return { ...item, [complete]: true };
        } else {
          return item;
        }
      } else {
        if (index === i) {
          return { ...item, [complete]: false };
        } else {
          return item;
        }
      }
    });
    setList(newArr);
  };

  const updateTodo = (value) => {
    setList([...list, { name: value, complete: false }]);
  };

  const editTodo = (index) => {
    const taskValue = list[index].name;
    setList(list.filter((item) => item.name !== taskValue));
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
                onClick={showTaskCompleted("complete", index)}
                key={index}
              />
              <label for={index}>{element.name}</label>
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
              {element.complete ? (
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
