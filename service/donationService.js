const donationRepo = require('../repository/donationRepo');

class DonationService {
    async getAll() {
        return await donationRepo.getAll();
    }
    async getDonationByFounraiserId(founraiserId) {
        let allDonations = await donationRepo.getAll();
        let j = 0
        let donationsOfFundraiser = {};
        for (let i = 0; i < allDonations.length; i++) {
            if (allDonations[i]["FundraiseId"] == founraiserId) {
                donationsOfFundraiser[j] = allDonations[i];
                j++
            }
        }
        return donationsOfFundraiser;
    }
    async createNewDonation(donation) {
        return await donationRepo.post(donation)
    }

}
module.exports = new DonationService();
