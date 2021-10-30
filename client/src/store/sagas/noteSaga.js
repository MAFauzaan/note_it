import { put, takeLatest } from 'redux-saga/effects'
import { fetchNote } from '../actions/notesActions'
import axios from 'axios'

require('dotenv').config();

export function* fetchNotes() {
    try {
        const json = axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BASE_URL}/getnotes`
        })
        
        yield put(fetchNote())
    } catch (error) {
        
    }

}


