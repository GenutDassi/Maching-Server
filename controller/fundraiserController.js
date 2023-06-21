import { Router } from 'express';
import { getAll } from '../service/fundraiserService';
const router = Router();

router.get('/', async (req, res, next) => {
    let allfundraiser = await getAll();
    console.log(allfundraiser.length);
    res.json(allfundraiser);

})

export default router;