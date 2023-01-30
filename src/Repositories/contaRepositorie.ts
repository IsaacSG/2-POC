import prisma from "../DB/prisma.js";
import { Conta, UpConta } from "../Protocols/contasProtocol.js";

export async function postContas(newConta: Conta) {
    const body = newConta;

    try {

        return prisma.conta.create({
            data: body
        });
    } 
    catch (error) {
        console.log(error);
    }
}

export async function getContas() {
    
    try {
        return prisma.conta.findMany();

    } 
    catch (error) {
        console.log(error);    
    }
}

export async function updateConta(conta: UpConta) {
    const idUpdate = conta;
    try {
        return prisma.conta.update({
            where: { id :
                idUpdate.id},
            data: {status: true}
        })
    } 
    catch (error) {
        console.log(error);    
    }
}