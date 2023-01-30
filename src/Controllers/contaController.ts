import { Request, Response } from "express";
import { Conta } from "../Protocols/contasProtocol.js";
import {  getContas, postContas, updateConta } from "../Repositories/contaRepositorie.js";

export function newConta(req: Request, res: Response){
    const newConta = req.body as Conta;
    postContas (newConta);

    res.status(201).send("Nova conta registrada");
}

export async function findContas(req: Request, res: Response) {
    const find = await getContas();

    res.status(200).send(find);
}

export async function pagarConta(req: Request, res: Response) {
    const pagamento = req.body;
    const resultado = await updateConta(pagamento);

    res.status(200).send(`Conta paga ${resultado}`);
}