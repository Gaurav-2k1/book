const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    email:{type:String},
    name:{type:String},
    uid:{type:String,ref:'user'},
    seats:[{type:String}],
    howmanySeats:{type:Number},
    theater:{type:mongoose.Schema.Types.ObjectId,ref:'theater'},
    amount:{type:Number},
    paymnetStatus:{type:Boolean},
    paymentMode:{type:String},    
    phoneNumber:{type:String},
    ticketType:{type:String},
    dateOfBooking:{type:String},
    timeOfShow:{type:String},
    orderStatus:{type:String},
    movieid:{type:mongoose.Schema.Types.ObjectId,ref:'movie'}
},{
    versionKey:false,
    timestamps:true
});

const Book = mongoose.model("booking",bookSchema);
module.exports=Book;