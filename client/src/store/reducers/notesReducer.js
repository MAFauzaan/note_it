const notesReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_NEW_NOTE":
            return state.push(action.payload);
        
        case "REMOVE_NOTE":
            return state.filter(item => item.id !== action.payload);
        
        default:
            return state;
    }
}

export default notesReducer;