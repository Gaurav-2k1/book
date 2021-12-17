const express = require('express');

const router = express.Router();
const Theater = require('../models/theater.model');


router.get('/',async(req,res)=>{

    let allTheaters = await Theater.find({}).populate('currentPlayingMovies');

    res.status(200).send(allTheaters);
})



router.post("/",async(req,res)=>{

    let theater = await Theater.create(req.body);

    res.status(201).send(theater);
})

router.get('/:movieId/:location',async(req,res)=>{
    let results = await Theater.find({$and:[{currentPlayingMovies:{$eq:req.params.movieId}},{location:{$eq:req.params.location}}]}).lean().exec();
    res.status(200).send(results);
});


module.exports=router;







