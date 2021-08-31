import authReducer from "./authReducer";
import todosReducer from "./todosReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer
})

export default rootReducer;