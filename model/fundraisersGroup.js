const mongoose = require('mongoose');

const fundraisersGroupSchema = mongoose.Schema({
    _id: Number,
    Name: String,
    Sum: Number
});
const FundraisersGroup = mongoose.model('fundraisersgroups', fundraisersGroupSchema);

module.exports = FundraisersGroup;

