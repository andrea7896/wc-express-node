import express, { Router } from 'express';
import listEmpleados from '../controllers/Empleados/list';
import createEmpleado from '../controllers/Empleados/create';
import deleteEmpleado from '../controllers/Empleados/delete';
import editEmpleado from '../controllers/Empleados/edit';
import empleadoFindById from '../controllers/Empleados/findById';
import empleadoValidationSchema from '../middlewares/empleado';

const router: Router = express.Router();

//Listar empleados
router.get('/list', listEmpleados);

//Crear un empleado
router.post('/create',[empleadoValidationSchema,createEmpleado]);

//Eliminar un empleado
router.delete('/delete/:id',deleteEmpleado);

//Editar un empleado
router.put('/edit',editEmpleado);

//Encontrar un empleado por id
router.get('/find/:id',empleadoFindById);

export default router;