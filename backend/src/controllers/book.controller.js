const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();



router.get("/",async(req,res)=>{
    let allOrders = await Book.find({});
    res.status(200).send(allOrders);

});



router.get("/:emailId",async(req,res)=>{
    let orders = await Book.find({email:{$eq:req.params.emailId}}).lean().exec();

    res.status(200).send(orders);
});



router.post("/",async(req,res)=>{

    let createBooking=await Book.create(req.body);


    res.status(201).send(createBooking);





})

module.exports=router;