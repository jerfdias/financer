
const express = require("express");
const cors=require("cors");
const app=express();
const port=process.env.PORT || 3000;
const Usuarios=require('./model/usuario.js');



app.use(cors());
app.use(express.json());




app.get('/usuarios',async(req,res)=>{

    
    res.json(Usuarios);
});



app.post('/usuarios',async(req,res)=>{





})


