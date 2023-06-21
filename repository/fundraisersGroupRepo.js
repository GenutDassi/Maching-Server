const db = require('../model/db');
const Donation = require('../model/fundraisersGroup');

class fundraisersGroupRepo {
    constructor(){
        db.connect();
    }
    async getAll() {
        return await fundraisersGroup.find({});
    }
}
module.exports = new fundraisersGroupRepo();