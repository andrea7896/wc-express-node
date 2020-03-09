import { Request, Response} from "express";
import { empleados } from '../../fakeData/empleados.json';

export default ((req:Request,res:Response) => {
    const id = req.body;
    const empleadoFound = empleados.findIndex(empleado => id === empleado.id);

    if(!empleadoFound){
        return res.status(404).send("not found");
    }

    empleados.splice(empleadoFound,1);
    res.status(200).send("empleado eliminado");
});