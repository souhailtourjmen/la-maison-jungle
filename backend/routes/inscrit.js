const express = require('express');
const router =express.Router();
const compteCtrl=require('../controllers/compteCtrl');
const auth = require('../middleware/auth');
router.get('/inscrit/',compteCtrl.allUser);

router.get('/:id',auth,compteCtrl.getUser);

router.put('/inscrit/:id',auth,compteCtrl.updateUser );

router.delete('/inscrit/:id',auth,auth,compteCtrl.deleteUser);

module.exports =router;