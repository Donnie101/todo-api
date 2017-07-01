// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb');
  }

  console.log('Connected to Mongodb');

  // db.collection('Todos').find({
  //   _id:new ObjectID('5957a5c1abbe2c1ea815d805')
  // }).toArray().then(function(docs){
  //   console.log('Todos: ');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },function(err){
  //   console.log('Unable to fetch Todos ',err);
  // })

  // db.collection('Todos').find().count().then(function(count){
  //   console.log('Todos count: '+count);
  // },function (err) {
  //   console.log('Unable to fetch Todos ',err);
  // })

  // db.collection('Todos').find().count(function(err,count){
  //   if(err){
  //     return console.log('COUNT ERR '+err);
  //   }
  //
  //   console.log('Todos count: '+count);
  //
  // })

  db.collection('Users').find({name:'TheDude'}).toArray(function(err,users){
    if(err)
      return console.log('couldn\'t fetch data');

    console.log(JSON.stringify(users,undefined,2));

  })


  //db.close();
});
