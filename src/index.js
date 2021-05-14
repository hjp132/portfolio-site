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




app.get('/', (req, res) => {
    res.render('intro', {
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
    })
});


app.get('/contact', (req, res) => {
    res.render('contact', {

    })
})











