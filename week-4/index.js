
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
// port number
const port =process.env.PORT
const app = express();

// set middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
// base url
const baseUrl= process.env.Base_URL;
// endpoit
app.get('/', (req,res)=>{
    //status codes: 404, 500, 200
    res.status(200).send({
        status: 200,
        message: 'Express serve works'
    });
    //endpoint movie 
    
});

app.get('/get-movies', (req, res)=> {
    const url= `${baseUrl}/films`;
    superagent.get(url).end((error,resp)=>{
        if (error){
            res.status(400).send({
                status: 400,
                message: 'unable to get movies'
            })
        }
        res.status(200).send(resp.body);
    })
})
app.post('/new-movie',(req,res)=> {
    const incomingData = req.body;
    const url= `${baseUrl}/fimls/${incomingData.id}`;
    superagent.get(url).end((error,resp)=> {
        if (error){
            res.status(400).send({
                status:400,
                message: 'unable to post new movies'
            })
        }
        res.status(200).send(resp.body);
    })
})
// declare our server 

app.listen(port,()=> {
    console.log(`Listening on port: ${port}`)
});
