import prisma from "../DB/prisma.js";
import { DellMorador, Morador } from "../Protocols/moradorProtocol.js";

export async function postMorador(newMorador: Morador) {
    const body = newMorador;

    try {

        return prisma.morador.create({
            data: body
        });
    } 
    catch (error) {
        console.log(error);
    }
}

export async function getMorador() {
    
    try {
        return prisma.morador.findMany();

    } 
    catch (error) {
        console.log(error);    
    }
}

export async function deleteMorador(morador: DellMorador) {
    const DelId = morador;
    try{
        const deleteUser = await prisma.morador.delete({
            where: {
              id: DelId.id,
            },
          })

    }
    catch(error){
        console.log(error);
    }
}