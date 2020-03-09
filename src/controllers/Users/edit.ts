import { Request, Response} from "express";
import { usuarios } from '../../fakeData/usuarios.json';
import { User } from '../../models/User';

export default ((req:Request,res:Response) => {
    const user:User = req.body;
    const index = usuarios.findIndex(i => i.id === user.id);

    if(index === -1){
        return res.status(404).send("not found");
    }
    
    usuarios.splice(index,1,user);
    res.status(200).json(user);
});