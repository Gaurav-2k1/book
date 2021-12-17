const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use((req,res,next)=>{   


 //   console.log(req.headers);
 
    next()
})
const userController = require('./controllers/user.controller');
const movieController = require('./controllers/movie.controller');
const bookController = require('./controllers/book.controller');
const slotPriceController = require("./controllers/slotPrice.controller")
app.use("/users",userController);
app.use("/movies",movieController);
app.use("/book",bookController);
app.use("/slotprice",slotPriceController)
const theaterController = require('./controllers/theater.controller');
app.use("/users",userController);
app.use("/movies",movieController);
app.use("/book",bookController);
app.use("/theater",theaterController);


module.exports=app;