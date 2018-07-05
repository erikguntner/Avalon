const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewModel = new Schema({
   id: { type: String, required: true },
   createdBy: { type: String, required: true },
   createdAt: { type: Date },
   message: { type: String, required: true }
});

module.exports = mongoose.model('Review', reviewModel);