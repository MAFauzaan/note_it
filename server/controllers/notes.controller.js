const Note = require('../models/Note'); //MONGOOSE MODEL


exports.getNotes = (req, res, next) => {
    Note.find({})
    .then(notes => {
        res.send(notes)
    })
    .catch(err => {
        console.log(err)
    })
}

exports.createNewNote = (req, res, next) => {
    const {title, labels, type, content } = req.body;

    console.log(req.body)

    const newNote = new Note({
        title: title,
        labels: labels,
        type: type,
        content: content,
        // status: status
    })

    newNote.save()
        .then(result => {
            console.log(result)
            res.send(result)
        })
        .catch(err => {
            console.log(result)
        })
}