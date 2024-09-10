import express from 'express';
import { signup,signin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);  //imoprted 
router.post('/signing', signin);

export default router;