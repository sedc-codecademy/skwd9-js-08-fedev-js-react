//Create Reducer

const todosReducer = (state = [], action) => {
    switch(action.type){
      case 'ADD_TODO':
        return [
          ...state,
          action.todo
        ];
      case 'REMOVE_TODO':
        return state.filter(todo => todo !== action.todo);
      default:
        return state;
    }
}

export default todosReducer;