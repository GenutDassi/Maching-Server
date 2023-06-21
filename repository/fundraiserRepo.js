const db = require('../model/db');
const Fundraiser = require('../model/fundraiser');

class FundraiserRepo {
    constructor(){
        db.connect();
    }
    async getAll() {
        return await Fundraiser.find({});
    }
}
module.exports = new FundraiserRepo();