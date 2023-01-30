import { Request, Response, NextFunction } from "express";
import contaSchema from "../Schemas/contaSchema.js";


export function validateConta(req: Request, res: Response, next: NextFunction) {
    const conta = req.body;
    const validation = contaSchema.validate(conta);

    if (validation.error) {
        console.log(validation.error);
        return res.status(400).send("Parametros incorretos");
    }

    next();
}