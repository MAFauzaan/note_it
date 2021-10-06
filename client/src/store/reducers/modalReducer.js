const modalReducer = (state = false, action) => {
    switch (action.type) {
        case "ACTIVATE":
            return state = true;

        case "DEACTIVATE":
            return state = false;

        default:
            return state;
    }
}

export default modalReducer;