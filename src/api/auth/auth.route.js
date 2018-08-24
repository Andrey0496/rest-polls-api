import express from 'express';

import { signin, login } from './auth.controller';

const router = express.Router();

router.post('/signin', signin);
router.post('/login', login);

export default router;
