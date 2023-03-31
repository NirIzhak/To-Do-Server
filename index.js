const express = require('express');
const app = express();
const mongoose = require('mongoose');
const TaskModel = require('./models/Tasks')
const PORT = process.env.PORT || 8000;

const cors = require('cors');

//const BASE_URL = 'https://to-do-list-48sr.onrender.com/'

app.use(express.json())

app.use(cors());

mongoose.connect('mongodb+srv://nir676676:uinJVDaRVwxqiCNX@cluster0.gurtaf5.mongodb.net/FirstTasksDb?retryWrites=true&w=majority')

app.get(`/getTasks`, async(req,res)=>{
    try {
        const result = await TaskModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
})



app.post('/createTask', async (req, res)=>{
    const task = req.body;
    const newTask = new TaskModel(task);
    await newTask.save();
    res.json(task)
})


app.delete('/deleteTask/:id', async (req, res) => {
    try {
      const taskId = req.params.id;
      const result = await TaskModel.findByIdAndDelete(taskId);
      if (!result) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  




app.listen(PORT, ()=>{
    console.log('server running on port => ' + PORT)
})








