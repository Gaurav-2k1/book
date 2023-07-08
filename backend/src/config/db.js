const mongoose = require('mongoose');
const env = require('dotenv').config();


const connect = () => {
    return mongoose.connect("mongodb+srv://akhilkamsala:akhil123@bookmyshowclonecluster.uxxgb.mongodb.net/bookDB?retryWrites=true&w=majority")
}

module.exports = connect;


// mongodb+srv://akhilkamsala:akhil123@bookmyshowclonecluster.uxxgb.mongodb.net/bookDB?retryWrites=true&w=majority