const fundraiserRepo = require('../repository/fundraiserRepo');

class FundraiserService {
    async getAll() {
        return await fundraiserRepo.getAll();
    }
}

module.exports = new FundraiserService();