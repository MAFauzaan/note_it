import * as types from '../types'

const initialState = {
    notes: [],
    newNote: {}
}


const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_NOTES:
            return {...state, notes: action.notes}
        
        default:
            return state;
    }
}

export default notesReducer;