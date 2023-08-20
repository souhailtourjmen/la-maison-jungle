const mongoose = require('mongoose');
require('dotenv').config();
exports.Connectbd=()=> {
    mongoose.connect("mongodb+srv://Souhail:l5TRShUtBxpOsZk6@maison-jungle.0mufuls.mongodb.net/test",
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
}
