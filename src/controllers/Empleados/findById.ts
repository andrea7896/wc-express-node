import { Request, Response} from "express";
import { empleados } from '../../fakeData/empleados.json';
import { Empleado } from '../../models/Empleados';
import empleado from "../../middlewares/empleado.js";

export default ((req:Request,res:Response) => {
    const id:string = req.params.id;
    const empleadoFound:Empleado = empleados.find(empleado => empleado.id === id );
    
    if(!empleadoFound){
        return res.sendStatus(404);
    }
    
    res.status(200).send(empleadoFound);
});