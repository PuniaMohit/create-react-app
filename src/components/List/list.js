import { useState } from "react";
import "./list.css";
import Input from "../Input/input";

const List = () => {
  const [indexCheck, setIndexCheck] = useState([]);
  const [list, setList] = useState(["xyz", "abc"]);
  const [printInput, setPrintInput] = useState("");

  let handleClick = (event, index) => {
    const { checked } = event.target;
    if (checked === true) {
      setIndexCheck((oldArray) => [...oldArray, index]);
    } else {
      setIndexCheck(indexCheck.filter((item) => item !== index));
    }
  };

  let updateTask = (value) => {
    setList((oldArray) => [...oldArray, value]);
  };

  let editTask = (index) => {
    const taskValue = list[index];
    setList(list.filter((item) => item !== taskValue));
    setPrintInput(taskValue);
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
                  handleClick(event, index);
                }}
                key={index}
              />
              <label for={index}>{element}</label>
            </div>
            {/* <div> */}
            
            {/* </div> */}
            <div>
            <button className="edit-button"
                onClick={() => {
                  editTask(index);
                }}
              >
                Edit
              </button>
              {indexCheck.includes(index) ? (
                <button className="clickShowButton">
                  Complete
                </button>
              ) : (
                <div className="if-not-button"></div>
              )}
            </div>
          </div>
        );
      })}
      <h4>Todo</h4>
      <Input updateTask={updateTask} printInput={printInput} />
    </div>
  );
};

export default List;
