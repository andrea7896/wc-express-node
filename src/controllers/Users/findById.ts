import { Request, Response} from "express";
import { usuarios } from '../../fakeData/usuarios.json';
import { User } from '../../models/User';
export default ((req:Request,res:Response) => {
    const id:string = req.params.id;
    const userFound:User = usuarios.find(user => user.id === id );
    
    if(!userFound){
        return res.sendStatus(404);
    }
    
    res.status(200).send(userFound);
});