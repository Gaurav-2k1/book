const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

router.get("/",async (req,res)=>{
    
    const allMovies = await Movie.find({});
    res.status(200).send(allMovies);

})

router.post("/create",async(req,res)=>{

    const movie = await Movie.create(req.body);
    return res.status(200).send(movie)

});

router.patch("/:id/update",async(req,res)=>{
    const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(movie)
})

module.exports=router;