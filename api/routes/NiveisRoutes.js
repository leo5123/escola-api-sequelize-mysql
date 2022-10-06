import { Router } from "express";
import NivelController from "../controllers/NivelController.js";

const router = Router()
router
 .get('/niveis', NivelController.pegaTodosOsNiveis)
 .get('/niveis/:id', NivelController.PegaNivelPorId)
 .post('/niveis', NivelController.CriaNivel)
 .put('/niveis/:id', NivelController.AtualizaNivel)
 .delete('/niveis/:id', NivelController.ApagaNivel)

 export default router