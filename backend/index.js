import express from 'express'
import profileData from './data/data.js';
import dotenv from 'dotenv'
const app = express();

dotenv.config()

//express Api
app.get('/',(req,res)=>{
    res.send("Api is working");
})


//Load data using the api
app.get('/api/data',(req,res)=>{
    res.send( profileData)
})


//load single data
app.get('/api/data/:id',(req,res)=>{
    //console.log(req.params.id)
    const singleChat = profileData.friends.find((c)=>c.id===parseInt(req.params.id))
    res.send(singleChat)
  
   

});


const PORT = process.env.PORT || 5000;

//Server
app.listen(PORT,console.log(`Server is running on ${PORT}`));
