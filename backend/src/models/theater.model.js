const mongoose = require('mongoose');




const theaterSchema = new mongoose.Schema({
    name:{type:String},
    screnType:{type:String},
    currentPlayingMovies:[{type:mongoose.Schema.Types.ObjectId,ref:'movie'}],
    showTimings:[{type:String}],
    location:{type:String},
    prices:[{type:String}],
    facilities:[{type:String}],
    addres:{type:String}    
})

const Theater = mongoose.model("theater",theaterSchema);

module.exports=Theater;