const express = require('express');
const router =express.Router();
const compteCtrl=require('../controllers/compteCtrl');
router.get('/inscrit',compteCtrl.allUser);

router.get('/:id',compteCtrl.getUser);

router.put('/inscrit/:id',compteCtrl.updateUser );

router.delete('/inscrit/:id',compteCtrl.deleteUser);

module.exports =router;