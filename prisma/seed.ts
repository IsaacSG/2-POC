import prisma from "../src/DB/prisma.js";

async function main() {
    await prisma.conta.createMany({
        data:[
            {
                "id": 1,
                "descricao": "Conta de luz",
                "valor": "150,00",
                "responsavel": "Dex",
                "status": false},
            {
                "id": 2,
                "descricao": "Conta de agua",
                "valor": "100,00",
                "responsavel": "Isaac",
                "status": true}
        ]
    })

    await prisma.morador.createMany({
        data:[
            {
                "id": 1,
                "nome": "Isaac",
                "quarto": "1",
                "telefone": "123456789"
            },
            {
                "id": 2,
                "nome": "Dex",
                "quarto": "2",
                "telefone": "987654321"
            }
        ]
    })

    await prisma.tarefa.createMany({
        data:[
            {
                "id": 1,
                "descricao": "",
                "nome": "Lavar os pratos",
                "responsavel": "Dex",
                "dia": "02/02/2023",
                "status": false
            },
            {
                "id": 2,
                "descricao": "",
                "nome": "Tirar o lixo",
                "responsavel": "Isaac",
                "dia": "02/02/2023",
                "status": true
            }
        ]
    })
}

main()
    .then((result) => {
        console.log("Registro");
    }).catch((err) => {
        console.log(err);
        process.exit(1);
    });