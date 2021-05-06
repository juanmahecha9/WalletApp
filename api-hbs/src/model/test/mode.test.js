const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testing = new Schema({
    name: String,
    lastName: String,
});

//toma el esquema y lo guarda en una collecion
module.exports = mongoose.model('test', testing); // definir la coleccion