const express = require('express');
const fundraisersGroupService = require('../service/fundraisersGroupService');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let allfundraisersGroup = await fundraisersGroupService.getAll();
    console.log(allfundraisersGroup.length);
    res.json(allfundraisersGroup);

})

module.exports = router;