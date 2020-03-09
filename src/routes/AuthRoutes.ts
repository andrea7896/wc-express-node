import express, { Router } from 'express';
import authLogin from '../controllers/Auth/login';
import credentialMiddleware from '../middlewares/credentials'
const router: Router = express.Router();

//Login route
router.post('/login',[credentialMiddleware,authLogin]);

export default router;