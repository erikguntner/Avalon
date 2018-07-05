const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clothesModel = new Schema({
   id: { type: Number, required: true },
   title: { type: String, required: true },
   price: { type: Number, required: true },
   type: { type: String, required: true },
   img: { type: String, required: true },
   description: { type: String, required: true }
});

module.exports = mongoose.model('Clothes', clothesModel);