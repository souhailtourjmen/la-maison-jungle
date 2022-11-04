const express = require('express');
const app = express(); 
const  routerConpte = require('./routes/inscrit');
const  routerUser=require('./routes/user');
const connectBd=require("./deo/connect");

connectBd.Connectbd();

app.use(express.json());

app.use((req, res, next) => { //route for cross-domain routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/',routerConpte);
app.use('/auth',routerUser);

module.exports = app ; 