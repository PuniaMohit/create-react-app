import './App.css';
import Tasks from './todo.json'
import { useState } from "react"

function App() {

  const [indexCheck, setIndexCheck] = useState([])

  function change(event, index) {
    const { checked } = event.target
  if(checked===true){
    setIndexCheck(oldArray => [...oldArray, index])
  }
  else{
    setIndexCheck(indexCheck.filter(item => item !== index))
  }
  }

  return (<div className='container'>
    <h3>Todo App</h3>
      {Tasks.map((element, index) => {
        return <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
            <div>
              <input type="checkbox" id={index} name={index} value={element.task} onClick={(event) => { change(event, index) }} key={index}/>
              <label for={index}>{element.task}{index}</label>
            </div>
            <div>{ 
            indexCheck.includes(index) ? <button variant="outline-secondary">Complete</button> : <></>}</div>
          </div>
          <hr />
        </>
      })}
  </div>
  );
}

export default App;
