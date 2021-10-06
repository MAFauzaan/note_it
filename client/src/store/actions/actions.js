export const addNote = (note) => {
    return {
        type: 'ADD_NEW_NOTE',
        payload: note
    };
};

export const activateModal = () => {
    return {
        type: "ACTIVATE"
    };
};

export const deactivateModal = () => {
    return {
        type: "DEACTIVATE"
    };
};