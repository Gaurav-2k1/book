const app = require('./index');
const connect =require('./config/db');
app.listen(4000,async()=>{

    await connect();

    console.log("Listening on the port 4000");


})