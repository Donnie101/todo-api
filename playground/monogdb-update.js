// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb');
  }

  console.log('Connected to Mongodb');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID("5957f4ee8498681384501617")
//   },{
//   $set:{
//     completed:true
//   }
// },{
//     returnOriginal:false
//   }).then(function (result) {
//     console.log(result);
//   })

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5957f2b5397dcc1f6cb960ba')
},{
  $set:{
    name:'The Pussy Hacker',

  },
  $inc:{
    age:100
  }
},{
  returnOriginal:false
}).then(function (result) {
  console.log(result);
})


  //db.close();
});
