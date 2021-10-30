const initialState = {
    notes: [],
    newNote: {}
}


const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_NEW_NOTE":
            return state.newNote = action.payload;
        
        // case "REMOVE_NOTE":
        //     return state.filter(item => item.id !== action.payload);
        
        default:
            return state;
    }
}

export default notesReducer;