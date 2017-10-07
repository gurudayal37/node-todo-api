const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({text:'my name is guru'}).then((result)=>{
  console.log(result);
});

Todo.findByIdAndRemove('59d9523a1a6f81b73abac46c').then((result)=>{
  console.log(result);
});
