const mongoose = require("mongoose");

const slotPriceSchema = new mongoose.Schema({
    slot:[{type:Object}],
    movie:{type:mongoose.Schema.Types.ObjectId,ref:'movie'}


})

const slotPrice = mongoose.model("slotprice",slotPriceSchema) 
module.exports = slotPrice;