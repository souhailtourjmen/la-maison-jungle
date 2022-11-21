const User = require("../models/User");
const bcrypt= require("bcrypt");
const jwt = require('jsonwebtoken');
exports.signIn=(req,res,next) => {
    console.log(req);
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
        }
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                }
                
                res.status(200).json({
                    userId: user._id,
                    token:jwt.sign(
                        {userId: user._id},
                        process.env.ACCESS_TOKEN_SECRET_KEY,
                         {expiresIn:'24h'}
                    ),
                    message: 'connected'
                });
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};
exports.signUp=(req,res,next) => {
    bcrypt.hash(req.body.password,10)
    .then(hash => {
            const user = new User({
                cin:req.body.cin ,
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email: req.body.email,
                password:hash,
            });
            user.save()
            .then(() => res.status(201).json({message:'account created'}))
            .catch(err => res.status(400).json({err}))
        })
    .catch(err => res.status(500).json({err}));
};


