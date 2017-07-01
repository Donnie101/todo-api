const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
  Todo.create({
    text:req.body.text
  }).then((newTodo)=>{
    res.send(newTodo)
  },(err)=>{
    res.status(400).send(err)
  })
});

app.listen(process.env.PORT||3000,()=>{
  console.log('THE SERVER IS LISTENING');
});
