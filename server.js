import Mongoose from "mongoose";
import Cors from "cors";
import Dotenv from "dotenv";
import Express from "express";
import { test } from "./Backend/controllers/personaje.controller";

dotenv.config()
mongoose.connect(process.env.urldb)
    .then(() => {
        console.log("Funciona la base de datos xdxdddxdxd")
    })
    .catch((error) => {
        console.log("No jala la base de datos xdxdxdxddd", error)
    })

const app = express();
app.use(cors());
app.listen(4000, ()=> {
    console.log("Servidor escuchado en el puerto 4000")
})

test()


