import { Router } from "express";
import PessoaController from "../controllers/PessoaController.js";

const route = Router()

route
.get('/pessoas', PessoaController.PegaTodasAsPessoas)
.get('/pessoas/:id', PessoaController.PegaPessoaPorId)
.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.PegaMatriculaPorId)
.post('/pessoas', PessoaController.CriaPessoa)
.post('/pessoas/:estudanteId/matricula', PessoaController.CriaMatricula)
.put('/pessoas/:id', PessoaController.AtualizaPessoa)
.delete('/pessoas/:id', PessoaController.ApagaPessoa)

export default route