const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();



router.get("/",async(req,res)=>{
    let allOrders = await Book.find({});
    res.status(200).send(allOrders);

});



router.get("/getBooking/:bookingId",async(req,res)=>{
    console.log(req.params.bookingId);
    let orders = await Book.findById(req.params.bookingId).populate('theater').populate('movieid').lean().exec();

    res.status(200).send(orders);
});



router.post("/create",async(req,res)=>{

    let createBooking=await Book.create(req.body);


    res.status(201).send(createBooking);

})

router.patch("/update/:id",async(req,res)=>{

    let updatedBooking=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});


    res.status(201).send(updatedBooking);





})

module.exports=router;