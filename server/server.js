const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser')

const notesRoute = require('./routes/notes.route')

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', notesRoute)

mongoose
  .connect(
    "mongodb://OJAN:Darkblood123@cluster0-shard-00-00.sjqiw.mongodb.net:27017,cluster0-shard-00-01.sjqiw.mongodb.net:27017,cluster0-shard-00-02.sjqiw.mongodb.net:27017/notes?ssl=true&replicaSet=atlas-sc9ats-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(5000, () => console.log("Server started on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });
