import { combineReducers } from "redux";

import notesReducer from "./notesReducer";
import modalReducer from "./modalReducer";


const reducers = combineReducers({
    note: notesReducer,
    modal: modalReducer
})

export default reducers;