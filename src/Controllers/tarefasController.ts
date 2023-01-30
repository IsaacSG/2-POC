import { postTarefas, getTarefas, updateTarefa, deleteTarefa } from "../Repositories/tarefaRepositorie.js";
import { Request, Response } from "express";
import { Tarefa } from "../Protocols/tarefaProtocol.js";

export function newTarefa(req: Request, res: Response){
    const newTarefa = req.body as Tarefa;
    postTarefas(newTarefa);

    res.status(201).send("Nova tarefa cadastrada");
}

export async function findTarefas(req: Request, res: Response){
    const find = await getTarefas();

    res.status(200).send(find);
}

export function finalizarTarefa(req: Request, res: Response){
    const id = req.body;
    updateTarefa(id);

    res.status(200).send(`Tarefa de número ${id} concluida`);
}

export function deletarTarefa(req: Request, res: Response){
    const id = req.body;
    deleteTarefa(id);

    res.status(200).send(`Tarefa de número ${id} deletada`);
}