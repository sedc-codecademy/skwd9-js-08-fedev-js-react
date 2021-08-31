
//Action
export const getTodos = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(requestTodo)
            const todoId = getState().auth.todoToBeFetched;
            const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            const todo = await data.json();
            // const formatedTodos = todos.map(todo => todo.title);
            dispatch(requestTodoSuccess(todo.title))
        } catch(error) {
            dispatch(requestTodoError(error))
        }
        
    }
}

const requestTodoSuccess = (todo) => ({
    'type': 'GET_TODOS_SUCCESS',
    todo
})

const requestTodoError = (error) => ({
    'type': 'GET_TODOS_ERROR',
    error
})

const requestTodo = {
    type: 'REQUEST_TODO'
}

export const addTodo = todoName =>({
    type: 'ADD_TODO',
    todo: todoName
})
  
export const removeTodo = todoName => ({
    type: 'REMOVE_TODO',
    todo: todoName
})
  