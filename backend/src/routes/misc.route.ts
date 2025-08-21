// ...new file...
import { Router } from 'express';
import { miscConvert } from '../controllers/util.controller';

const router = Router();
router.post('/convert', miscConvert);

export default router;