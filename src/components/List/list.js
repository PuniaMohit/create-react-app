import { useState } from "react";
import "./list.css";
import TodoAddTaskInput from "../input/input";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

const TodoList = () => {
  const [list, setList] = useState([
    { name: "one", complete: false, edit: false },
    { name: "two", complete: false, edit: false },
    { name: "three", complete: false, edit: false },
  ]);
  const [todoTaskForEditing, setTodoTaskForEditing] = useState("");
  const [editingInProcess, setEditingInProcess] = useState(false);
  const showTaskCompleted = (complete, index) => (event) => {
    const { checked } = event.target;
    const newArr = list.map((item, i) => {
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
    let newArr = [];
    if (editingInProcess) {
      newArr = list.map((element, index) => {
        if (element.edit) {
          return { name: value, complete: false, edit: false };
        } else {
          return element;
        }
      });
      setEditingInProcess(false);
    } else {
      newArr = [...list, { name: value, complete: false, edit: false }];
    }
    setList(newArr);
  };

  const editTodo = (index) => {
    const taskValue = list[index].name;
    setTodoTaskForEditing(taskValue);
    setEditingInProcess(true);
    const newArr = list.map((element, index) => {
      if (taskValue === element.name) {
        return { name: taskValue, complete: false, edit: true };
      } else {
        return element;
      }
    });
    setList(newArr);
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
              <label htmlFor={index}>{element.name}</label>
            </div>
            <div>
              <Icon.PencilSquare
                className="edit-button"
                title="Edit"
                onClick={() => {
                  editTodo(index);
                }}
              />
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
