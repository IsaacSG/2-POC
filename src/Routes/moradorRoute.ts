import { Router } from "express";
import { newMorador, findMoradores, delMorador } from "../Controllers/moradorController.js";
import { validateMorador } from "../Middlewares/moradorMiddle.js";

const router = Router();

router.get("/morador", findMoradores);
router.post("/morador", validateMorador, newMorador);
router.delete("/morador", delMorador);

export default router;