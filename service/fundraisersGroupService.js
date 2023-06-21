const fundraisersGroupRepo = require('../repository/fundraisersGroupRepo');

class FundraisersGroupService {
    async getAll() {
        return await fundraisersGroupRepo.getAll();
    }
}

module.exports = new FundraisersGroupService();