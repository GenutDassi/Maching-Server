const mongoose = require('mongoose');
const machingSchema = mongoose.Schema({
    _id:Number,
    Date: String,
    Target: Number,
    TimeLeft: Number,
    Manager_password: String
});
const Maching = mongoose.model('machings', machingSchema);
module.exports = Maching;