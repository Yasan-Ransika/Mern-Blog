import express from 'express';
import { signup,signin,google } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);  //imoprted 
router.post('/signing', signin);
router.post('/google', google)

export default router;