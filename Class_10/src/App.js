import './App.css';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from './actions/todosActions';
import Todos from './Todos';
import Auth from './Auth';



function App() {
  const [todoText, changeTodoText] = useState('');
  const dispatch = useDispatch();

  const addNewTodo = () => {
    if (todoText.length > 0) {
      dispatch(addTodo(todoText));
    }
    
  }
  return (
    <div className="App">
        <input type="text" value={todoText} onChange={ e => changeTodoText(e.target.value)} />
        <button onClick={addNewTodo} >ADD TODO</button>
        <Todos />
        <Auth />
    </div>
  );
}

export default App;
