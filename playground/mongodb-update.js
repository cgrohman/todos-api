//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("58bdbea3e687474c5e633bfe")
  }, {
    $set:{
      name: 'Cori'
    },
    $inc:{
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  }, (err) =>{

  });
  //db.close();
});