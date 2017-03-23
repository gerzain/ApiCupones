var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    promocion: { type: String },
    imagen: { type: String },
    codigo: { type: String },
    fecha: { type: String }
});

module.exports = mongoose.model('Cupon', clientSchema);