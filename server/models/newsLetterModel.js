const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, {
  timestamps: true, 
});

module.exports = mongoose.model('Newsletter', newsletterSchema);