import express,{Application} from "express";
import entryPoint from './src/app';
import { constants } from './src/config/Constants'
const app: Application = express();



// app entry point
app.use(entryPoint);

// server up
app.listen(constants.port, () => console.log("Servidor iniciado en " + constants.port));