const express = require('express');
const donationService = require('../service/donationService');
const router = express.Router();
const logger = require("../logger")
router.get('/', async (req, res, next) => {
    try {
        let allDonation = await donationService.getAll()        
        res.json(allDonation);
    }
    catch (err) {
        next(err)
    }
});
router.get(`/:funfraiserId`, async (req, res, next) => {
    try {
        const funfraiserId = req.query.funfraiserId;
        funfraiserDonations = await donationService.getDonationByFounraiserId(funfraiserId);
        console.log(funfraiserDonations);
        res.json(funfraiserDonations);
    }
    catch (err) {
        next(err)
    }
});
router.post('/', async (req, res, next) => {
    try {
        let donation = req.body
        let donate = await donationService.createNewDonation(donation)
        logger(`A new donation has been received from ${donation[0]["Name"]} on a total ${donation[0]["Sum"]}`)
        res.json(donate)
    }
    catch (err) {
        next(err)
    }
}
)


module.exports = router;
