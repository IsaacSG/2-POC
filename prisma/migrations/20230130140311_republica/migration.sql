-- CreateTable
CREATE TABLE "conta" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "conta_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "morador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "quarto" TEXT NOT NULL,

    CONSTRAINT "morador_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarefa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "dia" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-20 20:44:28.992679'::timestamp without time zone,
    "responsavel" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "tarefa_pk" PRIMARY KEY ("id")
);
