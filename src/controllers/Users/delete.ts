import { Request, Response} from "express";
import { usuarios } from '../../fakeData/usuarios.json';

export default ((req:Request,res:Response) => {
    const id = req.body;
    const userFound = usuarios.findIndex(user => id === user.id);

    if(!userFound){
        return res.status(404).send("not found");
    }

    usuarios.splice(userFound,1);
    res.status(200).send("usuario eliminado");
});