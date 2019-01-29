const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove


Todo.findByIdAndRemove('5c4dc74b2f2ef017b0d6baa5').then((todo) => {
  console.log(todo);
});
