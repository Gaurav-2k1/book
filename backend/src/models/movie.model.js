const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title:{type:String},
    img_url:{type:String},
    likes:{type:String},
    ratings:{type:String},
    view:[{type:String}],
    language:[{type:String}],
    duration:{type:String},
    genre:[{type:String}],
    certificate:{type:String},
    release:{type:String},
    bg_img:{type:String},
    cast:[{type:Object}],
    crew:[{type:Object}]
},{
    versionKey:false,
    timestamps:true
});

const Movie = mongoose.model("movie",movieSchema);

module.exports=Movie;