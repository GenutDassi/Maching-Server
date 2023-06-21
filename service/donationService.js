const donationRepo = require('../repository/donationRepo');

class DonationService {
    async getAll() {
        return await donationRepo.getAll();
    }
    async getDonationByFounraiserId(founraiserId) {
        let allDonations = await donationRepo.getAll();
        let donationsOfFundraiser = [];
        allDonations.forEach(donation => {
            if (donation.FundraiseId == founraiserId)
                donationsOfFundraiser.push(donation);
        }
        )
        return donationsOfFundraiser;
    }
}
module.exports = new DonationService();
