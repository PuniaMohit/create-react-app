import { useState } from "react";
import "./list.css";
import TodoAddTaskInput from "../input/input";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

const TodoList = () => {
  const [list, setList] = useState([
    { name: "one", complete: false },
    { name: "two", complete: false },
    { name: "three", complete: false },
  ]);
  const [todoTaskForEditing, setTodoTaskForEditing] = useState("");
  const [previousTaskBeforeChange, setPreviousTaskBeforeChange] = useState("")
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
    console.log(previousTaskBeforeChange)
    console.log(todoTaskForEditing)
    let newArr=list.map((element, index) => {
      if (element.name === previousTaskBeforeChange) {
        return {name: todoTaskForEditing, complete:false}
            }
      else{
        return element
      }
    })
    // setList([...list, { name: value, complete: false }]);
    setList(newArr)
  };

  console.log(list)


  const takingPresentInputValue = (value) => {
    setTodoTaskForEditing(value)
  }

  const editTodo = (index) => {
    const taskValue = list[index].name;
    setPreviousTaskBeforeChange(taskValue);
    setTodoTaskForEditing(taskValue);
  };
  return (
    <div>
      {list.map((element, index) => {
        return <div className="list" key={index}>
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
      }
      )
      }
      <h4>Todo</h4>
      <TodoAddTaskInput
        updateTodo={updateTodo}
        todoTaskForEditing={todoTaskForEditing}
        takingPresentInputValue={takingPresentInputValue}
      />
    </div>
  );
};

export default TodoList;
