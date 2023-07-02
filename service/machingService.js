const error = require('mongoose/lib/error');
const machingRepo = require('../repository/machingRepo');
const fundraiserRepo = require("../repository/fundraiserRepo")

class MachingService {
    async getDetails() {
        return await machingRepo.getDetails();
    }
    async update(id, new_target, password) {
        let fundraiser = await fundraiserRepo.getById(id)
        let maching_details = await machingRepo.getDetails()
        if (fundraiser[0]["if_manage"] == 1 && maching_details[0]["Manager_password"] == password) {
            return await machingRepo.update(new_target)
        }
        else {
            return "you don't have a parmision to change the maching target"
        }
    }
}
module.exports = new MachingService();
