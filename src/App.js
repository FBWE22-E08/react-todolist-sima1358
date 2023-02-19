import "./App.css";
  import { useState } from "react";


function App() {
  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState('')

  const addTask=(event)=>{
event.preventDefault();
setTodos([...todos, input]);
setInput('');

  };

  const deleteTask=(index)=>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const setTask=(index)=>{
    const newTodos = [...todos];
    newTodos[index] += '(done)';
    setTodos(newTodos);
  };

  return(
    <div className="App">
      <div>
        
      </div>
      <h1 >To Do List</h1>
      <form>
        <h4 className="label-define">Define your task</h4>
        <input className="input-task"
        value={input}
        onChange={(event)=> setInput (event.target.value)} 
        type='text'
         />
         <button className="btn-task" onClick={addTask} type='submit'>Add a task</button>
      </form>
      <div class="container">
      <ul className="list-task">
        {todos.map((todo, index) =>(
          <li className="result-task">
            {todo}
         <button className="del-btn" onClick={() => deleteTask(index)}>Delete task</button>
         <button className="set-btn" onClick={() => setTask(index)}>Set to Done</button>

          </li>
        ))}
      </ul>
      </div>
      
    </div>
  )

}

export default App;
