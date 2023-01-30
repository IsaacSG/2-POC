import { postMorador, getMorador, deleteMorador } from "../Repositories/moradorRepositorie.js";
import { Request, Response } from "express";
import { Morador } from "../Protocols/moradorProtocol.js"

export function newMorador(req: Request, res: Response){
    const newMorador = req.body as Morador;
    postMorador(newMorador);

    res.status(201).send("Novo morador cadastrado");
}

export async function findMoradores(req: Request, res: Response){
    const find = await getMorador();
    res.status(200).send(find);
}

export function delMorador(req: Request, res: Response){
    const id = req.body;
    deleteMorador(id);
    res.status(200).send(`Morador de número ${id} deletado`);
}