const db = require('../model/db');
const Maching = require('../model/maching');
const maching = require('../model/maching');

class MachingRepo {
    constructor(){
        db.connect();
    }
    async getDetails() {
       return await maching.find({});
    } 
    async update (new_target){
        let result = await Maching.updateOne(maching[0], {$set: { Target: new_target }});
        return result
    }
    
}
module.exports = new MachingRepo();
