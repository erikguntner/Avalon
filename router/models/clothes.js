const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clothesModel = new Schema({
   id: { type: Number, required: true },
   title: { type: String, require: true },
   type: { type: String, require: true },
   img: { type: String, required: true },
   description: { type: String, required: true }
});

module.exports = mongoose.model('Clothes', clothesModel);