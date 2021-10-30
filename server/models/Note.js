const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    label: {
        type: Object,
        required: true
    },
    type: {
        type: String,
        // required: true
    },
    content: {
        type: String,
        required: true
    },
    // status: {
    //     type: String
    // }
})

module.exports = mongoose.model('Note', NoteSchema)