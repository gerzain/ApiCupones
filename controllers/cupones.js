var mongoose = require('mongoose');
var Cupon = mongoose.model('Cupon');

//GET - Todos los registros 
exports.findAll = function(req, res) {
    Cupon.find(function(err, clients) {
        if (err) res.send(500, err.message);
        console.log('GET /cupones')
        res.status(200).jsonp(clients);
    });
};

//GET - Obtener registro mediante ID
exports.findById = function(req, res) {
    Cupon.findById(req.params.id, function(err, client) {
        if (err) return res.send(500, err.message);
        console.log('GET /cupon/' + req.params.id);
        res.status(200).jsonp(client);
    });
};

//POST - Guardar 
exports.add = function(req, res) {
    console.log('POST');
    console.log(req.body);
    var client = new Cupon({
        promocion: req.body.promocion,
        imagen: req.body.imagen,
        codigo: req.body.codigo,
        fecha: req.body.fecha
    });
    client.save(function(err, client) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(client);
    });
};

//PUT - Actualizar  registro existente 
exports.update = function(req, res) {
    Cupon.findById(req.params.id, function(err, client) {
        client.promocion = req.body.promocion;
        client.imagen = req.body.imagen;
        client.codigo = req.body.codigo;
        client.save(function(err) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(client);
        });
    });
};

//DELETE - Eliminar usando un  ID
exports.delete = function(req, res) {
    Cupon.findById(req.params.id, function(err, client) {
        client.remove(function(err) {
            if (err) return res.send(500, err.message);
            res.json({ message: 'Se elimino correctamente ' });
        });
    });
};