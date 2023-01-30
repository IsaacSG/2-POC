import express from "express";
import tarefaRouter from "./Routes/tarefaRoute.js";
import moradorRouter from "./Routes/moradorRoute.js";
import contaRouter from "./Routes/contaRoute.js";

const server = express();

server.use(express.json());

server.get("/health", (req, res) => {
    res.send("Tá vivo")
})

server.use(tarefaRouter);
server.use(moradorRouter);
server.use(contaRouter);


server.listen(4000, () => {
    console.log("Server listen from 4000");
})