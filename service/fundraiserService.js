const fundraiserRepo = require('../repository/fundraiserRepo');
const donationService = require ('../service/donationService')
class FundraiserService {
     async getAll() {
         let res = {}
         const allFundraisers = await fundraiserRepo.getAll()
         console.log(allFundraisers)
         let id = 0
         for (let i = 0; i < allFundraisers.length; i++) {
             res [i] = allFundraisers[i]
             id = res[i]["_id"]
             console.log(id)
             res[i] += await donationService.getDonationByFounraiserId(id)
         }
         return res;
    }
    async getById (id) {
        const fundraiser = await fundraiserRepo.getById(id);
        return fundraiser
    }
    async update(id , new_target){
        let fundraiser = await fundraiserRepo.getById(id)
        return await fundraiserRepo.update(fundraiser, new_target)
    }
}

module.exports = new FundraiserService();