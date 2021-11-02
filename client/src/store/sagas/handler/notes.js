import { call, put } from 'redux-saga/effects';
import { setNotes } from '../../actions/notesActions';
import { getNotes } from '../requests/notes';

export function* handleGetNotes () {
    try {
        const response = yield call(getNotes);

        yield put(setNotes(response.data))
    } catch (error) {
        console.log(error)
    }
}