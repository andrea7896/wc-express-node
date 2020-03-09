import joi from '@hapi/joi';
export type Empleado = {
    id: string;
    nombre: string;
    edad: number;
    cargo: string;
}

export const EmpleadoSchema = joi.object().keys({
    id: joi.string().required(),
    nombre: joi.string().required(),
    edad:joi.number().required(),
    cargo: joi.string().alphanum().required()
})