const express = require('express')
const router = express.Router();
const fundraiserService = require('../service/fundraiserService')

router.get('/', async (req, res, next) => {
    try {
        let allFundraisers = await fundraiserService.getAll()
        res.json(allFundraisers);
    }
    catch (err) {
        next(err)
    }
})
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const fundraiser = await fundraiserService.getById(id)
        res.json(fundraiser);
    }
    catch (err) {
        next(err)
    }
})
router.put('/:id', async (req, res, next) => {
    try {
        console.log("controller")
        const new_target = req.body.Target
        console.log(new_target)
        const id = req.params.id;
        const result = await fundraiserService.update(id, new_target)
        res.json(result)
    }
    catch (err) {
        next(err)
    }
})
module.exports = router;
