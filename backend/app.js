const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
const  routerInscrit = require('./routes/inscrit');
mongoose.connect('mongodb+srv://Souhail:c_2FVTUbYz_6dyS@maisonjungle.huuugpz.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => { //route for cross-domain routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/',routerInscrit);

module.exports = app ; 