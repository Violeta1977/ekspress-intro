// senoji node versija
// const express = require('express');
import express from 'express';
// inicijuoja app
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('Nori suzinoti apie si projekta?');
});

app.get('*', (req, res) => {
    return res.send('Norimas puslapis nerastas! 404');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});


// pagrindinis puslapis - pagrindinis rout
// req - request: objektas, kuriame informacija apie ieinancia uzklausa 
// res - responce: objektas, kuriame informacija apie galimybe issiusti ats klietui
// return del galimos skirtingos logikos
//  pvz jei if vienaip, return viena
//  pvz jei if kitaip, return kitas rezultatas
// app.get('*', (req, res) '*' nuveda i klaidos puslapi, jeigu neteisingai suvedei adresa
// labai svarbus eiliskumas: '*' rekia rasyti paskutini