const db = require('../model/db');
const Fundraisers = require('../model/fundraiser');
class FundraiserRepo {
    constructor() {
        db.connect();
    }
    async getAll() {
        return await Fundraisers.find({});
    }
    async getById(id) {
        return await Fundraisers.find({ _id: id });
    }
    async update(fundraiser , new_target) {
        let result = await Fundraisers.updateOne(fundraiser[0], {$set: { Target: new_target }});
        if (result == null) {
            return "Oops something get wrong, check yourself and try again"
        }
        return result
    }
}
module.exports = new FundraiserRepo();