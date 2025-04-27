const mongoose = require('mongoose');

const uri = "mongodb+srv://anamariabautistar:EnB3U2KCo6CFLK6J@cluster0.2x3gzbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(e => console.error('Error de conexión a MongoDB Atlas', e));

module.exports = mongoose;
