
//Action

export const addTodo = todoName => ({
    type: 'ADD_TODO',
    todo: todoName
})
  
export const removeTodo = todoName => ({
    type: 'REMOVE_TODO',
    todo: todoName
})
  