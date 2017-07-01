// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb');
  }
//DELETE MANY
  // db.collection('Todos').deleteMany({text:'to eat launch'},function(err,result){
  //   if(err)
  //     return console.log('CAN NOT DELETE ',err);
  //
  //   console.log('ITEM DELETED: ',result);
  //
  // })


//DELETE ONE
  // db.collection('Todos').deleteOne({text:'Walk the dog'},function(err,result){
  //   console.log(result);
  // })

//FIND ONE AND DELETE
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

//TAMARIN
  db.collection('Users').deleteMany({name:"TheDude"},function(err,result){
    if (err) {
      return console.log('SOME WENT WROG (DUDE)');
    }

    console.log('THE DUDES ARE DELETED');

  });

  db.collection('Users').findOneAndDelete({
    name:'Pussy'
  },function(err,result){
    if(err)
      return console.log(err);

    console.log('Oh I am so sorry pussy is dead');

  })



  //db.close();
});
