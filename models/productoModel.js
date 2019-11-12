let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({
	descripcion : { type: String , required: false },
	precio : { type: String , required: true }
});

let model = mongoose.model('productos',modelSchema,'productos');
module.exports = model;
