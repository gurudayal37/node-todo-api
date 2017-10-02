const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server .',err);
  }
  console.log('Connected to MongoDB server .');

  // db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //db.collection('Users').deleteMany({name:'Guru dayal'});

  db.collection('Users').findOneAndDelete({_id:new ObjectID('59cf55ea63b6083814f63e15')}).then((result)=>{
    console.log(result);
  });
  //db.close();
});
