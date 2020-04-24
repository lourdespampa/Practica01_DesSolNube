const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articulosSchema = new Schema({
		descripcion: String,
		precio: Number,
		stock: Number

},{
		collection:"articulos"
});

module.exports = mongoose.model("articulos", articulosSchema);
