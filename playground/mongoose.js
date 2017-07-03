const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '595a745e42e0aa19241875cd';

// if (ObjectID.isValid(id)) {
//   return console.log('ID NOT VALID');
//}

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log("Todos ",todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('todo ',todo);
// });


// Todo.findById({
//   _id:id
// }).then((todo)=>{
//   console.log("Todo ",todos);
// }).catch((err)=>{
//   console.log('file not found');
// });

User.findById({
  _id:id
}).then((user)=>{
  if(!user)
    return console.log('USER NOT FOUND');
  console.log(user);
}).catch((err)=>{
  console.log('SOMETHIN WENT WRONG');
});
