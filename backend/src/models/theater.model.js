const mongoose = require('mongoose');




const theaterSchema = new mongoose.Schema({
    name:{type:String},
    screenType:{type:String},
    currentPlayingMovies:[{type:mongoose.Schema.Types.ObjectId,ref:'movie'}],
    showTimings:[{type:String}],
    location:{type:String},
    prices:[{type:String}],
    facilities:[{type:String}],
    address:{type:String}    
},{
    versionKey:false,
    timestamps:true
})

const Theater = mongoose.model("theater",theaterSchema);

module.exports=Theater;