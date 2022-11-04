const express = require('express');
const router =express.Router();
const User = require('../models/User');
const userCtrl=require('../controllers/userCtrl');

router.get('/inscrit',userCtrl.allUser);

router.get('/:id',userCtrl.getUser);

router.post('/inscrit',userCtrl.createUser);

router.put('/inscrit/:id',userCtrl.updateUser );

router.delete('/inscrit/:id',userCtrl.deleteUser);

module.exports =router;