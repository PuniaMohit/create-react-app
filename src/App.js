import "./App.css";
import { useState } from "react";

function App() {
  const [indexCheck, setIndexCheck] = useState([]);
  const [input, setInput] = useState("");
  const [list, setList] = useState(["xyz", "abc"]);

  let handleClick = (event, index) => {
    const { checked } = event.target;
    if (checked === true) {
      setIndexCheck((oldArray) => [...oldArray, index]);
    } else {
      setIndexCheck(indexCheck.filter((item) => item !== index));
    }
  };

  function update(event) {
    setInput(event.target.value);
  }

  function add() {
    let value = input;
    setInput("");
    setList((oldArray) => [...oldArray, value]);
  }

  return (
    <div className="container">
      <h3>Todo App</h3>
      {list.map((element, index) => {
        return (
          <>
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
              <div>
                {indexCheck.includes(index) ? (
                  <button
                    className="clickShowButton"
                    variant="outline-secondary"
                  >
                    Complete
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        );
      })}
      <h4>Todo</h4>
      <input
        className="submit-input"
        type="text"
        onChange={update}
        value={input}
        placeholder="Your Todo..."
      />
      <button className="submit" onClick={add}>
        Submit
      </button>
    </div>
  );
}

export default App;
