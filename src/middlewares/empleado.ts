import { Request, Response, NextFunction} from "express";
import { Empleado, EmpleadoSchema } from "../models/Empleados";



export default (req: Request, res: Response, next: NextFunction) => {
    const empleado: Empleado = req.body;
    const validation = EmpleadoSchema.validate(empleado);
    if(validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();
}