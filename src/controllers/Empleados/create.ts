import { Request, Response } from "express";
import { empleados } from '../../fakeData/empleados.json';
import { Empleado } from '../../models/Empleados';


export default (req: Request, res: Response) => {
    const empleado: Empleado = req.body;
    empleados.push(empleado);

    res.status(201).send("Empleado creado");
};