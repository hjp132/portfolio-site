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

app.get('/bits', (req, res) => {
    res.render('bits', {

    })
})


app.get('/bits/clickerapp', (req, res) => {
    res.render('bitItem', {
        prevLink: './weatherapp',
        nextLink: './portfolio',
        title: 'Clicker App',
        desc: 'This react-native app is my first time dabbling in react-native after spending a good amount of time learning react native through online courses',
        repolink: 'https://github.com/hjp132/clicker-app',
        images: true,
        colNumber: 'three',
        imgurl1: '/images/clickerimg.png',
    })
})

app.get('/bits/portfolio', (req, res) => {
    res.render('bitItem', {
        prevLink: './clickerapp',
        nextLink: './workoutapp',
        title: 'Portfolio',
        desc: 'My most recent project was developing this portfolio. This project has had a LOT of work done to it and has multiple different layouts and styles applied through it, for now I am happy with how it is. ',
        repolink: 'https://github.com/hjp132/portfolio-site'

    })
})

app.get('/bits/workoutapp', (req, res) => {
    res.render('bitItem', {
        prevLink: './portfolio',
        nextLink: './weatherapp',
        title: 'Workout App',
        desc: 'This app allows the user to create/edit workout plans and create thier own in a drag and drop plan system.',
        repolink: '',
        images: true,
        imgurl1: '/images/workoutapp.png'

    })
})

app.get('/bits/weatherapp', (req, res) => {
    res.render('bitItem', {
        prevLink: './workoutapp',
        nextLink: './clickerapp',
        title: 'Weather App',
        images: true,
        imgurl1: '/images/weatherapp.png',
        desc: 'The Weather App was my first project I made in Node.js, it is something that is very simple but helped me learn a lot more about the basics of web development.',
        repolink: 'https://github.com/hjp132/node3-weather-website',
        try: 'https://hjp-weatherapp.herokuapp.com/'

    })
})

// app.get('/bits/clickerapp', (req, res) => {
//     res.render('bitItem', {
//         prevLink: './WeatherApp',
//         nextLink: './Portfolio',
//         title: 'Clicker App',
//         desc: 'this is a test',
//         repolink: ''

//     })
// })











