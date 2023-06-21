const express = require('express');
const donationService = require('../service/donationService');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let allDonation = await donationService.getAll()
    res.json(allDonation);
});
router.get(`/:funfraiserId`, async (req, res, next) => {
    const funfraiserId = req.query.funfraiserId;
    funfraiserDonations = await donationService.getDonationByFounraiserId(funfraiserId);
    console.log(funfraiserDonations);
    res.json(funfraiserDonations);
    });


module.exports = router;