//Create Reducer

const defaultState = {
  isFetching: false,
  todos: [],
  error: null
}

const todosReducer = (state = defaultState, action) => {
    switch(action.type){
      case 'REQUEST_TODO':
        return {
          ...state,
          isFetching: true
        }
      case 'GET_TODOS_ERROR':
        return {
          ...state,
          error: action.error,
          isFetching: false
        }
      case 'GET_TODOS_SUCCESS':
        return {
          ...state,
          todos: [action.todo],
          isFetching: false
        }
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.todo]
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo !== action.todo)
        }
      default:
        return state;
    }
}

export default todosReducer;