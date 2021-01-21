const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const connection = mongoose.connect('mongodb://localhost:27017/hotelbooking', {useNewUrlParser: true});
const bodyParser = require('body-parser');
const router = express.Router();
const users = require('./routes/users.router');
const hotels = require('./routes/hotel.router')
const port = 3000;

const server = app.listen(port, function () {
  console.log(`server running on port 3000`);
});

 mongoose.connection.on("open", err => {
    if (err) console.log("Error connecting to our mongo database");
    console.log("Connected to mongo database successfully");
  });
 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api', router);
app.use('/api/users', users);
app.use('/api/hotels',hotels);
