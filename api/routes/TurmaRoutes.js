import { Router } from "express";
import TurmasController from "../controllers/TurmasController.js";

const router = Router()
router
 .get('/turmas', TurmasController.pegaTodosAsTurmas)
 .get('/turmas/:id', TurmasController.PegaTurmaPorId)
 .post('/turmas', TurmasController.CriaTurma)
 .put('/turmas/:id', TurmasController.AtualizaTurma)
 .delete('/turmas/:id', TurmasController.ApagaTurma)

 export default router