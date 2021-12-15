const express = require('express');
const User=require('../models/user.model');

const router = express.Router();



router.get('/',async (req,res)=>{
    const users = await User.find({});
    res.send(users);
})


module.exports= router;
