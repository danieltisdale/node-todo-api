// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((results) => {
    //     console.log(results);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDeletej
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // deleteMany and findOneAndDelete
    // db.collection('Users').deleteMany({name: 'Daniel'}).then((results) => {
    //     console.log(results);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5a88915d8010d32840d8730c')}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });


    // db.close();

});