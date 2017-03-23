var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Conexion a BD mongo
mongoose.connect('mongodb://localhost/cupones', function(err, res) {
    if (err) throw err;
    console.log('Conexion a BD exitosa');
});



// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Importar modelos y controladores 
var models = require('./models/cupon')(app, mongoose);
var ClientCtrl = require('./controllers/cupones');

var router = express.Router();


// Ruta del index 
router.get('/', function(req, res) {
    res.send("Index - ");
});

app.use(router);

// Rutas de la API
var api = express.Router();

api.route('/cupon')
    .get(ClientCtrl.findAll)
    .post(ClientCtrl.add);

api.route('/cupon/:id')
    .get(ClientCtrl.findById)
    .put(ClientCtrl.update)
    .delete(ClientCtrl.delete);

app.use('/api', api);

app.listen(5000, function() {
    console.log("Node server running on http://localhost:3000");
});