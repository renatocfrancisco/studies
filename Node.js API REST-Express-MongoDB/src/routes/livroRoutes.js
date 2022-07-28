import livroController from "../controllers/livrosController.js";
import express from "express";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listaLivroPorEditora)
    .get("/livros/:id", livroController.listarLivrosPorId)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)
    .delete("/livros/:id", livroController.excluirLivro)
export default router;