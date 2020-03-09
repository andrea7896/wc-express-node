import listUsers from '../controllers/Users/list';
import createUser from '../controllers/Users/create';
import deleteUser from '../controllers/Users/delete';
import updateUser from '../controllers/Users/edit';
import findById from '../controllers/Users/findById';

import express, { Router } from 'express';
import userValidationSchema from '../middlewares/users'

const router: Router = express.Router();



//Listar usuarios
router.get('/list', listUsers);

//Filtrar por id usuario
router.get('/find/:id',findById);


//Create usuario
//los middlewares si son muchos tienen que meterse en una lista
//como es una lista, va por orden 
router.post('/create',[userValidationSchema,createUser]);


//Delete usuario
router.delete('/delete/:id',deleteUser);

//Update usuarios
router.put('/update',[userValidationSchema,updateUser]);

export default router;