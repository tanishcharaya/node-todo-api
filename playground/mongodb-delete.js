// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Tanish'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({name:'Tanish'}).then((result) => {
    console.log(JSON.stringify(result,undefined,2));
  });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("57ac8d47878a299e5dc21bc8")
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  db.close();
});
