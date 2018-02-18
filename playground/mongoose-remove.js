const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5a890063fee4009eac93b33d'}).then((todo) => {

// });

Todo.findByIdAndRemove('5a890063fee4009eac93b33d').then((todo) => {
    console.log(todo);
});