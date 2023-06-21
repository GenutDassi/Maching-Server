const mongoose = require('mongoose');

const fundraiserSchema = mongoose.Schema({
    _id: Number,
    Name: String,
    Sum: Number,
    Target : Number,
    GroupId: Number
})
const Fundraiser = mongoose.model('funraisers', fundraiserSchema);

module.exports = Fundraiser;