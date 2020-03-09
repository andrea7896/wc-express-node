import { Request, Response} from "express";
import { usuarios } from '../../fakeData/usuarios.json';

export default (req:Request,res:Response) => {
    res.status(200).json(usuarios);
}