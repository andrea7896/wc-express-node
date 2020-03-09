import { Request, Response, NextFunction} from "express";
import { User, UserSchema } from "../models/User";


//request vendra usuario
export default (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.body;
    const validation = UserSchema.validate(user);
    if(validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();
}