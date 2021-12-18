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



router.post("/create",async(req,res)=>{

    let createBooking=await Book.create(req.body);


    res.status(201).send(createBooking);

})

router.patch("/create/:id",async(req,res)=>{

    let updatedBooking=await Book.findByIdAndUpdate(req.params.id,req.body);


    res.status(201).send(updatedBooking);





})

module.exports=router;