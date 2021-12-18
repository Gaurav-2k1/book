const express = require('express');

const router = express.Router();
const Theater = require('../models/theater.model');


router.get('/',async(req,res)=>{

    let allTheaters = await Theater.find({}).populate('currentPlayingMovies');

    res.status(200).send(allTheaters);
})

router.get("/getTheaters/:movieId",async (req,res)=>{

    let data = await Theater.find({currentPlayingMovies:{$in:[req.params.movieId]}}).lean().exec();
    res.status(200).send(data);

})



router.get("/getTheaters/:movieId/:filter",async (req,res)=>{


    let filteredCondition = req.params.filter;

    filteredCondition= filteredCondition.split("-");
    console.log(filteredCondition);

    
    let data = await Theater.find({$and:[{currentPlayingMovies:{$in:[req.params.movieId]}},{showTimings:{$in:[filteredCondition]}}]}).lean().exec();
    res.status(200).send(data);

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







