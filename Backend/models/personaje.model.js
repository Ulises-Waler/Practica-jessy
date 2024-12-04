import { Schema, Model } from "mongoose";

const squemaPersonaje = new Schema({
    name:{
        type:String,
    },
    serie:{
        type:Boolean,
    }
})

export const modelPersonaje = new Model("Tabla de personaje", EsquemaPersonaje)
