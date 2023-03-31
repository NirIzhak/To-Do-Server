const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    }
})


const TaskModel = mongoose.model('Tasks', TaskSchema)
module.exports = TaskModel;