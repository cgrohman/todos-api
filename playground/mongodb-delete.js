//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').deleteMany({name: 'Cori Grohman'}).then((result)=>{
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({_id: new ObjectID("58bdbb5373de3b49c56434ab")}).then((result)=>{
    console.log(result);
  });
  //db.close();
});