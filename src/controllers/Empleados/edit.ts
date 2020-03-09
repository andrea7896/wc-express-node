import { Request, Response} from "express";
import { empleados } from '../../fakeData/empleados.json';
import { Empleado } from '../../models/Empleados';

export default ((req:Request,res:Response) => {
    const empleado:Empleado = req.body;
    const index = empleados.findIndex(i => i.id === empleado.id);

    if(index === -1){
        return res.status(404).send("not found");
    }
    
    empleados.splice(index,1,empleado);
    res.status(200).json(empleado);
});