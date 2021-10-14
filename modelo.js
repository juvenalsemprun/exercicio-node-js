const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const task = new Schema({
    tarefas:{type:String,required:true},
    feito:{type:Boolean,required:true},
    date:{type:Date,default:Date.now}
})
module.exports = mongoose.model("Task",task)