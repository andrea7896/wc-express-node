import jwt from 'jsonwebtoken';
import { usuarios } from "../../fakeData/usuarios.json"
import { constants } from "../../config/Constants";
import { Request, Response } from "express";


export default(req: Request, res:Response) => {
    const credentials = req.body;

    const match = usuarios.find(user => {
       if(user.login === credentials.login && user.password === credentials.password) {
            return user;
       }
    });

    if(!match){
        return res.sendStatus(404);
    }

    const { id, login } = match

    //creacion del token
    const token = jwt.sign({id, login}, constants.JWTKey, { expiresIn: "24h"})

    res.status(200).json({ token });

};