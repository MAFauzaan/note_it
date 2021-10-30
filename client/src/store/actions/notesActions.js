export const addNote = (note) => {
    return {
        type: 'ADD_NEW_NOTE',
        payload: note
    };
};

export const fetchNote = () => {
    return {
        type: 'FETCH_NOTE'
    }
}