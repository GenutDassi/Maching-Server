const mongoose = require('mongoose');

const fundraiserSchema = mongoose.Schema({
    _id: Number,
    Name: String,
    Target: Number,
    if_manage: Number,
    GroupId: Number
});
const Fundraiser = mongoose.model('fundraisers', fundraiserSchema);

module.exports = Fundraiser;