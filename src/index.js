const app = require('./app');
const path = require('path');
const hbs = require('hbs');
const express = require('express');
const mongoose = require('mongoose');



const port = process.env.PORT || 3000;

app.set('port', process.env.PORT);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});


const publicDirectoryPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));
app.use(express.static(path.join(__dirname, '/public')));


const router = express.Router();
app.use('/', router);

// CRUD create read update delete

// const mongodb = require('mongodb');
// const { routes } = require('./app');
// const MongoClient = mongodb.MongoClient;

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'wk-project'

// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
//     // db.collection('chest-1').insertOne({
//     //     exercise : 'Pushups',
//     //     reps     : 10,
//     //     description : "Regular pushups"
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert exercise')
//     //     }

//     //     console.log(result.ops)
//     // })
// })


// router.get('/', function(req, res) {
//     // Get the only one db instance in our app
//     var db = req.db;

//     // Fetch from 'users' collection
//     var userCollection = db.get("chest-1");
//     userCollection.find({}, {}, function(e, docs) {
//           res.render('user-list', {'userlist' : docs});
//     });
// });



app.get('/', (req, res) => {
    res.render('intro', {
    })
});

app.get('/projects', (req, res) => {
    res.render('projects', {
    })
});

app.get('/profile', (req, res) => {
    res.render('profile', {
    })
});

app.get('/projects/clickerapp', (req, res) => {
    res.render('./projects/ClickerApp', {
    })
});













