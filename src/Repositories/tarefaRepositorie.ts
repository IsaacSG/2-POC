import prisma from "../DB/prisma.js";
import { Tarefa, UpTarefa } from "../Protocols/tarefaProtocol.js";

export async function postTarefas(newConta: Tarefa) {
    const body = newConta;

    try {

        return prisma.tarefa.create({
            data: body
        });
    } 
    catch (error) {
        console.log(error);
    }
}

export async function getTarefas() {
    
    try {
        return prisma.tarefa.findMany();

    } 
    catch (error) {
        console.log(error);    
    }
}

export async function updateTarefa(tarefa: UpTarefa) {
    const idUpdate = tarefa;
    try {
        return prisma.tarefa.update({
            where: { id :
                idUpdate.id},
            data: {status: true}
        })
    } 
    catch (error) {
        console.log(error);    
    }
}

export async function deleteTarefa(tarefa: UpTarefa) {
    const DelId = tarefa;
    try{
        const deleteUser = await prisma.tarefa.delete({
            where: {
              id: DelId.id,
            },
          })

    }
    catch(error){
        console.log(error);
    }
}