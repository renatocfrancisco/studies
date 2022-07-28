import autorController from "../controllers/autoresController.js";
import express from "express";

const router = express.Router();

router
    .get("/autores", autorController.listarAutores)
    .get("/autores/:id", autorController.listarAutoresPorId)
    .post("/autores", autorController.cadastrarAutor)
    .put("/autores/:id", autorController.atualizarAutor)
    .delete("/autores/:id", autorController.excluirAutor)
export default router;