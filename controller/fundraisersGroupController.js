const express = require('express');
const fundraisersGroupService = require('../service/fundraisersGroupService');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
    console.log("arrive controller")
    let allfundraisersGroup = await fundraisersGroupService.getAll();
    res.json(allfundraisersGroup);
}
catch(err){
    next(err)
}
})

module.exports = router;