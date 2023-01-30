import { Router } from "express";
import { findContas, newConta, pagarConta } from "../Controllers/contaController.js";
import { validateConta } from "../Middlewares/contaMiddle.js";

const router = Router();

router.get("/contas", findContas);
router.post("/contas", validateConta, newConta);
router.put("/contas", pagarConta);

export default router;