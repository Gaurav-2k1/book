const express = require('express');

const router = express.Router();
const Theater = require('../models/theater.model');


router.get('/',async(req,res)=>{

    let allTheaters = await Theater.find({});

    res.status(200).send(allTheaters);
})



router.get('/:movieId/:location',async(req,res)=>{
    let results = await Theater.find({$and:[{currentPlayingMovies:{$eq:req.params.movieId}},{location:{$eq:req.params.location}}]}).lean().exec();
    res.status(200).send(results);
});









