import {Router} from 'express';
import PasswordController from '../controllers/PasswordController';

const router = Router();

router.post('/', PasswordController.index)


export default router;