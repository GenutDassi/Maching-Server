const db = require('../model/db');
const Donation = require('../model/donation');

class DonationRepo {
    constructor(){
        db.connect();
    }
    async getAll() {
        return await Donation.find({});
    }
}
module.exports = new DonationRepo();