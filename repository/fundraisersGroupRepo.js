const db = require('../model/db');
const fundraisersGroups = require('../model/fundraisersGroup');

class fundraisersGroupRepo {
    constructor(){
        db.connect();
    }
    async getAll() {
        console.log("arrive repository")
        return await fundraisersGroups.find({});
    }
}
module.exports = new fundraisersGroupRepo();