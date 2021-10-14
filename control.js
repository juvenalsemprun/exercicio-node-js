const mongoose = require("mongoose")
const tarefas = mongoose.model("Task")

exports.toda = function(req, res){

    tarefas.find({},function(error, found){

        if (error){
            return res.status(400).json(error)
        } else{
            res.status(200).json(found)
        }
    })
}

exports.id= function(req, res){
    tarefas.find({"_id":req.params.id},function(error, found){
        if(error){
            return res.status(400).json(error)
        }else{
            res.status(200).json(found)
        } 
    })
}

exports.new=function(req, res){
    var novo = new tarefas(req.body)
    novo.save(function(error, found){
        if(error){
            return res.status(400).json(error)
        }else{
            res.status(200).json(found)
        }
    })
}

exports.update=function(req, res){
    tarefas.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(error, found){
        if(error){
            return res.status(400).json(error)
        }else{
            res.status(200).json(found)
        }
    })
}

exports.delete=function(req, res){
    tarefas.deleteOne({_id:req.params.id},function(error, found){
        if(error){
            return res.status(400).json(error)    
        }else{
            res.status(200).json(found)
        }
    })
}