import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo, removeTodo } from './actions/todosActions';
import { logIn, userMe, logOut } from './actions/authActions';


const Todos = () => {
  console.log('RE RENDERED TODOS')
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const deleteTodo = todo => {
    dispatch(removeTodo(todo))
  }
  return (
    <>
      {
        todos.map((todo, index) => <div key={index}>{ todo } <span onClick={() => deleteTodo(todo)}>X</span></div>)
      }
    </>
  )
}

const Auth = () => {
  console.log('RE RENDERED AUTH')
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logUser = () => {
    dispatch(logIn())
    dispatch(userMe({
      userName: 'BOB BOBSKY',
      password: '12345',
      age:23,
      mail: 'mail@gmail.com'
    }))
  }
  return (
    <div>
      {
        !auth.loggedIn
          ? <button onClick={logUser }>LOG IN</button>
          : <div>
            {
              auth.user &&
               <div>
                 <p>USER NAME: {auth.user.userName}</p>
                 <p>AGE: {auth.user.age}</p>
                 <p>MAIL: {auth.user.mail}</p>
                 <button onClick={() => dispatch(logOut())}>LOGOUT</button>
               </div>
            }
          </div>
      }
    </div>
  )
}


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
