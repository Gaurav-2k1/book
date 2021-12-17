const express = require('express');
const router = express.Router();
const slotPrice = require("../models/slotPrice.model");

router.post("/",async(req,res)=>{
   const slot_price = await  slotPrice.create(req.body);
   return res.status(201).send(slot_price)
})
router.get("/",async(req,res)=>{
    const slot_price = await slotPrice.find({}).lean().exec();
    return res.status(200).send(slot_price)
 })

 module.exports = router