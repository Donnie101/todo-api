require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var {mongoose} = require('./db/mongoose');
var {ObjectID} = require('mongodb')
var {User} = require('./models/user');
var {Todo} = require('./models/todo');
var {authenticate} = require('./middleware/authenticate')

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
});

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
      return res.sendStatus(404);
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo)
      return res.sendStatus(404)

    res.send(todo);
  }).catch((err)=>{
    res.sendStatus(400)
  })
});

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)){
      return res.sendStatus(404);
  }

  if(_.isBoolean(body.completed)&& body.completed){
    body.completedAt = new Date().getTime();
  }else{
     body.completed = false;
     body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((updatedTodo)=>{
    if(!updatedTodo)
      res.sendStatus(400)

    res.send(updatedTodo)
  }).catch((err)=>{
    res.sendStatus(400);
  })

});

//AUTHENTICATION

app.post('/users',(req,res)=>{
  var body = _.pick(req.body,['email','password'])
  var user = new User(body);

  user.save().then(()=>{
    return user.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send(user);
  }).catch((err)=>{
    res.status(400).send(err);
  })
});


app.get('/users/me',authenticate,(req,res)=>{
  res.send(req.user);

});

app.post('/users/login',(req,res)=>{
  var body = _.pick(req.body,['email','password']);

  User.findByCredentials(body.email,body.password).then((user)=>{
    return user.generateAuthToken().then((token)=>{
      res.header('x-auth',token).send(user);
    });
  }).catch((err)=>{
    res.sendStatus(400);
  });




// User.findOne({email:req.body.email},(err,user)=>{
//
  //   if(!user)
  //     return res.status(400).send('USER NOT FOUND');
  //
  //   bcrypt.compare(req.body.password,user.password,(err,result)=>{
  //     if(err){
  //       return res.status(400).send('SOMETHING WENT WRONG')
  //     }
  //     else if(result){
  //       return res.status(200).send(user);
  //     }else{
  //       return res.status(400).send('PASSWORD INCORRECT');
  //     }
  //   });
  //
  // }).catch((err)=>{
  //   return res.status(400).send('SOMETHING WENT WRONG');
  // })
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
