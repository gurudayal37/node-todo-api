const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// var id='559d6a4afa05a8b1846b3113f';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id is not valid ');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log(todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id ',todo);
// }).catch((e)=>console.log(e));

var id='59d2a5b9bf36e25435d90eac';

User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log('User By Id ',user);
}).catch((e)=>console.log(e));
