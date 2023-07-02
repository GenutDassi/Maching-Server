const fundraisersGroupRepo = require('../repository/fundraisersGroupRepo');

class FundraisersGroupService {
    async getAll() {
        console.log("arrive service")
        return await fundraisersGroupRepo.getAll();
    }
}

module.exports = new FundraisersGroupService();