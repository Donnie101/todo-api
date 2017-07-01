// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb');
  }

  console.log('Connected to Mongodb');

  // db.collection('Todos').insert({
  //   test:'Something to do',
  //   completed:false
  // },function(err,result){
  //   if(err){
  //     return console.log('Unable to insert Todo',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // })



  // db.collection('Users').insert({
  //   name:'TheDude',
  //   age:72,
  //   location:'Planet Earth'
  // },function(err,result){
  //   if(err){
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });

  db.collection('Users').insert({
    name:'Pussy',
    age:91,
    location:'Mars DC'
  },function(err){
    if (err) {
      return console.log('PUSSU HAS NOT BEEN CREATED');
    }
    console.log('pussu is back');

  })

  db.close();
});
