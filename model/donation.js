const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    _id: Number,
    Name: String,
    Sum: Number,
    FundraiseId: Number
});
const Donation = mongoose.model('donations', donationSchema);

module.exports = Donation;