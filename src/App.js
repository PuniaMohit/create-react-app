import './App.css';
import tasks from './tasks.json'
import { useState } from "react"

function App() {

  const [indexCheck, setIndexCheck] = useState([])

  let handleClick = (event, index) => {
    const { checked } = event.target
    if (checked === true) {
      setIndexCheck(oldArray => [...oldArray, index])
    }
    else {
      setIndexCheck(indexCheck.filter(item => item !== index))
    }
  }

  return (<div className='container'>
    <h3>Todo App</h3>
    {tasks.map((element, index) => {
      return <>
        <div className='list' key={index}>
          <div>
            <input type="checkbox" id={index} name={index} value={element.task} onClick={(event) => { handleClick(event, index) }} key={index} />
            <label for={index}>{element.task}{index}</label>
          </div>
          <div>{
            indexCheck.includes(index) ? <button variant="outline-secondary">Complete</button> : <></>}</div>
        </div>
      </>
    })}
  </div>
  );
}

export default App;