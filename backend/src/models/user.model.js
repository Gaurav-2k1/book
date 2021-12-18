const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    email :{type:String,required:false,unique:true},
    password:{type:String,required:false},
    firstName:{type:String,required:false},
    lastName:{type:String,required:false},
    uid:{type:String,required:false}
/*     address :{type:mongoose.Schema.Types.ObjectId,ref:'address'} */
},{
    versionKey:false,
    timestamps:true
});

const User = mongoose.model('user',userSchema);

module.exports= User;




