const mongoose = require('mongoose');

const funraisersGroupSchema = mongoose.Schema({
    _id: Number,
    Name: String,
    Sum: Number
})
const FunraisersGroup = mongoose.model('funraisersGroups', funraisersGroupSchema);

module.exports = FunraisersGroup;