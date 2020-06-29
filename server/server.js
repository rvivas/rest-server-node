require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyPaser = require('body-parser');




app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());


// Configuracion global rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, resp) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', 3000);
})