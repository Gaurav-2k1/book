const app = require('./index');
const connect =require('./config/db');
<<<<<<< HEAD
app.listen(5000,async()=>{
=======
app.listen(4000,async()=>{
>>>>>>> 61e4533153217e4d8886d67e8f48772680e4fce5

    await connect();

    console.log("Listening on the port 4000");


})