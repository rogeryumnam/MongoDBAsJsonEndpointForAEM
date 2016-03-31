var mongoose = require('mongoose');

// Create the Mixed Schema
var mixSchema = new mongoose.Schema({}, { "strict": false });

// Export the model
module.exports = mongoose.model('jsonforaem', mixSchema);
