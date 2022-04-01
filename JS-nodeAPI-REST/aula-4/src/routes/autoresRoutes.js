import AutorController from "../controllers/autoresController.js";
import express from "express";

const router = express.Router();

router
    .get('/autores/:id', AutorController.buscarAutor)
    .get('/autores', AutorController.listarAutores)
    .post('/autores', AutorController.cadastrarAutor)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.deletarAutor)

export default router;