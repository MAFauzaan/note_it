import { takeEvery } from 'redux-saga/effects'
import { GET_NOTES } from '../types'
import { handleGetNotes } from './handler/notes'

export default function* fetchNotesWatcherSaga() {
    yield takeEvery(GET_NOTES, handleGetNotes)
}