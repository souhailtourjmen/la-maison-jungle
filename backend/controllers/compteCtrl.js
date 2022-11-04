const User = require("../models/User");
const bcrypt= require("bcrypt");

exports.allUser= (req,res ,next) => { //methods return all user to database 
    User.find()
    .then((user) => {res.status(200).json(user)})
    .catch(err => res.status(400).json(err));
};

exports.getUser=(req, res, next) => {//methods return one user to database 
    User.findOne({
      _id: req.params.id
    }).then(
      (user) => {
        res.status(200).json(user);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  }

exports.updateUser=(req, res, next) => {  // Methods update user to database
    bcrypt.hash(req.body.password,10)
    .then(hash => {
            const user = new User({
                cin:req.body.cin ,
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email: req.body.email,
                password:hash,
            });
            console.log(user);
            user.updateOne({ _id: req.params.id }, user)
            .then(() => res.status(200).json({ message: 'Objet modifié !'}))
            .catch(error => res.status(400).json({ error }));
        })
    .catch(err => res.status(500).json({err}));
        
};
 

exports.deleteUser=(req, res, next) => {  //Methods delete user to database
    User.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };