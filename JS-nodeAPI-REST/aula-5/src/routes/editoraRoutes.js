import EditoraController from "../controllers/editoraController.js";
import express from "express";

const router = express.Router();

router
    .get('/editora/:id', EditoraController.buscarEditora)
    .get('/editora', EditoraController.listarEditoras)
    .post('/editora', EditoraController.cadastrarEditora)
    .put('/editora/:id', EditoraController.atualizarEditora)
    .delete('/editora/:id', EditoraController.deletarEditora)

export default router;