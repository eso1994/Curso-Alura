import LivroController from "../controllers/livrosControler.js";
import express from "express";

const router = express.Router();

router
    .get('/livros/:id', LivroController.buscarLivro)
    .get('/livros', LivroController.listarLivros)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.deletarLivro)

export default router;