var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    promocion: { type: String },
    imagen: { type: String },
    codigo: { type: String },
    fecha: { type: Date, default: new Date("YYYY-mm-ddTHH:MM") }
});

module.exports = mongoose.model('Cupon', clientSchema);