const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

router.get("/",async (req,res)=>{
    
    const allMovies = await Movie.find({});
    res.status(200).send(allMovies);

})

router.post("/create",async(req,res)=>{

    const body= req.body;
    console.log(body);

});

module.exports=router;