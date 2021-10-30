const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes.controller')

router.post('/', notesController.getNotes)
router.post('/postnewnote', notesController.createNewNote)

module.exports = router;