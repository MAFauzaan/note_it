import * as types from '../types'

export const getNotes = () => {
    return{
        type: types.GET_NOTES
    }
}

export const setNotes = (notes) => {
    return{
        type: types.SET_NOTES,
        notes
    }
}