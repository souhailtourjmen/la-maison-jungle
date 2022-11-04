const mongoose = require('mongoose');
exports.Connectbd=()=> {
    mongoose.connect('mongodb+srv://Souhail:c_2FVTUbYz_6dyS@maisonjungle.huuugpz.mongodb.net/test',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
}
