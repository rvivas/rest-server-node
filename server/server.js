const express = require('express')
const app = express()
const bodyPaser = require('body-parser');

app.use(bodyPaser.urlencoded({ extended: false }));
require('./config/config');
app.use(bodyPaser.json());

app.get('/usuarios', function(req, res) {
    res.json('Hello World')
});

app.post('/usuarios', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.
        status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario',
        })
    } else {
        res.json({
            body
        })
    }
});

app.put('/usuario:/id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/usuario:/id', function(req, res) {
    res.json('Delete usuario');
})

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
})