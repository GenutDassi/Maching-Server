const db = require('../model/db');
const Donation = require('../model/donation');

class DonationRepo {
    constructor() {
        db.connect();
    }
    async getAll() {
        return await Donation.find({});
    }
    async post (donation) {
        return await Donation.create(donation)
    }

}
module.exports = new DonationRepo();