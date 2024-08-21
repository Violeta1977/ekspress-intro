// senoji node versija
// const express = require('express');
import express from 'express';
import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js';
import { discountRouter } from './router/discountRouter.js';
import { studentsRouter } from './router/studentsRouter.js';
import { booksRouter } from './router/booksRouter.js';
import { phonesRouter } from './router/phonesRouter.js';
// inicijuoja app
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.use('/services', servicesRouter);
app.use('/team', teamRouter);
app.use('/discount', discountRouter);
app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use('/phones', phonesRouter);

app.get('/img', (req, res) => {
    return res.send('Images...');
});

app.get('/img/logo.png', (req, res) => {
    return res.send('Images: logo.png turinys :P');
});

app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🛸');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});

// ---------------------------------------------------



// pagrindinis puslapis - pagrindinis rout
// req - request: objektas, kuriame informacija apie ieinancia uzklausa 
// res - responce: objektas, kuriame informacija apie galimybe issiusti ats klietui
// return del galimos skirtingos logikos
//  pvz jei if vienaip, return viena
//  pvz jei if kitaip, return kitas rezultatas
// app.get('*', (req, res) '*' nuveda i klaidos puslapi, jeigu neteisingai suvedei adresa
// labai svarbus eiliskumas: '*' rekia rasyti paskutini