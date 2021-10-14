const mongoose = require("mongoose");
const express = require("express");
const door = 8080;
const app = express(); 
app.use(express.json())
const task = require("./modelo")



mongoose.connect('mongodb://localhost/task').then(function(){
    console.log("conectado a o banco de dados")
    
}).catch(function(error){
    console.log("falia a conectar: " +error)
})

const rota = require("./rotas")
rota(app)

app.listen(door,function(){ 
    console.log("app runing url http://localhost:"+door)
})