const mongoose = require('mongoose');
require('dotenv').config();
exports.Connectbd=()=> {
    mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
}
