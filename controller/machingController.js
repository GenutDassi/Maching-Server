const express = require('express');
const machingService = require('../service/machingService');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
    let details = await machingService.getDetails();
    res.json(details);
}
catch(err){
    next(err)
}
})
router.put('/:id', async (req, res, next) => {
    try {
        const new_target = req.body.Target
        const password = req.body.Password
        const id = req.params.id;
        const result = await machingService.update(id, new_target, password)
        res.json(result)
    }
    catch (err) {
        next(err)
    }
})
module.exports = router;