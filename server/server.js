const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ObjectID} = require('mongodb')
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos',(req,res)=>{

  Todo.find({}).then((todos)=>{
    res.send(todos);
    console.log(res);
  },function (err) {
    res.status(400);
  })

});

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id))
    return res.send('ID NOT VALID')

  Todo.findById(id).then((todo)=>{
    if(!todo)
      return res.send('TODO NOT FOUND');

    res.send(todo)
  }).catch((e)=>{
    res.res.send('SOMETHING WENR WRONG');
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
