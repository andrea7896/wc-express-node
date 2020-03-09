import express,{Application,Request,Response} from "express";
const app: Application = express();
//const port: number = 9000;
import { usuarios } from './fakeData/usuarios.json';
import bodyParser from "body-parser";
import { User } from './models/User'
import usersRouters from './routes/UserRoutes';
import authRouters from './routes/AuthRoutes';
import empleadosRouters from './routes/EmpleadosRoutes';
import tokenValidator from './middlewares/token';

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req:Request,res:Response)=>{
    res.send("HELLO WORLD");
});

// users routes
app.use('/users',[tokenValidator, usersRouters]);

// empleados routes
app.use('/empleados',empleadosRouters);

//Login auth routes
app.use('/auth',authRouters);

export default app;