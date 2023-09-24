const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://empresaTechServer:rEZHmemt0IMbYJ3z@cluster0.yfph2lt.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Erro na conexão com o MongoDB: ' + err);
});

module.exports = mongoose;
