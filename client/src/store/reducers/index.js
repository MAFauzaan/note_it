import { combineReducers } from "redux";

import notesReducer from "./notesReducer";
import modalReducer from "./modalReducer";


const reducers = combineReducers({
    notes: notesReducer,
    modal: modalReducer
})

export default reducers;