import { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState(["todo 1", "Todo 2"])
  const addTodo = () => {
    const item = document.getElementById("input").value;
  if(!item) return
    setTodo([...todo, item])
    document.getElementById("input").value = "";
  }

  return (
    <>
      <div className="todolist">
        <div className="">
          {todo.length} is {todo.length % 2 == 0 ? "Even"  : "Odd"}
        </div>
          <input type="text" id="input" />
          <button onClick={addTodo}>Add Todo</button>
        <ul>
        {
          todo.map((t,i)=>(
            <li key={i} >{t}</li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default App
