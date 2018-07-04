const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewModel = new Schema({
   id: { type: Number, required: true },
   createdBy: { type: String, require: true },
   createdAt: { type: Date },
   message: { type: String, required: true }
});

module.exports = mongoose.model('Review', reviewModel);