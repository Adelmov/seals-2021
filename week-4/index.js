require('dotenv').config();
const express = require('express');
// port number
const port =process.env.PORT
const app = express();
// endpoit
app.get('/', (req,res)=>{
    //status codes: 404, 500, 200
    res.status(200).send(' You made it to the first endpoint ');
});
app.get('/', (req,res)=>{
    res.status(200).send(' You made it to the second endpoint');
});

// declare our server 

app.listen(port,()=> {
    console.log(`Listening on port: ${port}`)
});