const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();



router.get("/",async(req,res)=>{


    let allOrders = await Book.find({});
    res.status(200).send(allOrders);

});

module.exports=router;