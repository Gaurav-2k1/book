const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userController = require('./controllers/user.controller');
const movieController = require('./controllers/movie.controller');
const bookController = require('./controllers/book.controller');
app.use("/users",userController);
app.use("/movies",movieController);
app.use("/book",bookController);
module.exports=app;