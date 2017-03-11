const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

// var id = '58c42bea52409141f90c5d05'
// var id = '58c42bea52409141f90c5d05a'
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo', todo);
// });
var id = '58bdd07fc0f5645e68c0cb79'

User.findById(id).then((user) => {
  if (!user){
    return console.log('User ID not found');
  }
  console.log('User', user);
}).catch((e) => console.log(e));